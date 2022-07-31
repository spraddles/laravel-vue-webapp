<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param User $user
     * @return array
     */

    public function toArray($user)
    {
        return [
            'email' => $this->email,
            'first_name' => $this->userMeta->first_name,
            'last_name' => $this->userMeta->last_name,
            'date_of_birth' => $this->userMeta->date_of_birth,
            'favourite_food' => $this->userMeta->favourite_food,
            'language' => $this->userMeta->language,
            'gender' => $this->userMeta->gender,
        ];
    }
}
