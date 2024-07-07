<?php
namespace App\Traits;

use App\Models\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;


trait HasImage
{
    // protected $imageFieldName = 'url';

    // public static function bootHasImage()
    // {
    //     static::creating(function ($model) {
    //         if ($model->hasImageFile()) {
    //             $model->storeImage(request()->file($model->getImageFieldName()));
    //         }
    //     });

    //     static::updating(function ($model) {
    //         if ($model->hasImageFile()) {
    //             $model->storeImage(request()->file($model->getImageFieldName()));
    //         }
    //     });
    // }

    // public function storeImage(UploadedFile $image)
    // {
    //     $path = Storage::disk('public')->put('images', $image);
    //     if ($this->image) {
    //         $this->image->update(['url' => $path]);
    //     } else {
    //         $this->image()->create([
    //             'url' => $path,
    //             'hasApproved' => false
    //         ]);
    //     }
    // }

    // public function hasImageFile()
    // {
    //     return request()->hasFile($this->getImageFieldName());
    // }

    // public function getImageFieldName()
    // {
    //     return $this->imageFieldName;
    // }

    // // public function setImageFieldName($fieldName)
    // // {
    // //     $this->imageFieldName = $fieldName;
    // // }

    // public function images()
    // {
    //     return $this->morphMany(Image::class, 'imageable');
    // }
    protected $imageFieldName = 'image';

    public static function bootHasImages()
    {
        static::created(function ($model) {
            if ($model->hasImageFile()) {
                $model->storeImage(request()->file($model->getImageFieldName()));
            }
        });

        static::updating(function ($model) {
            if ($model->hasImageFile()) {
                $model->deleteImage(); // Delete previous image if updating
                $model->storeImage(request()->file($model->getImageFieldName()));
            }
        });

        static::deleting(function ($model) {
            $model->deleteImage();
        });
    }

    public function storeImage(UploadedFile $image)
    {
        $path = Storage::disk('public')->put('images', $image);

        $this->images()->create([
            'url' => $path,
            'hasApproved' => false,
        ]);
    }

    public function deleteImage()
    {
        if ($this->images()->exists()) {
            Storage::disk('public')->delete($this->images->first()->url);
            $this->images()->delete();
        }
    }

    public function hasImageFile()
    {
        return request()->hasFile($this->getImageFieldName());
    }

    public function getImageFieldName()
    {
        return $this->imageFieldName;
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
