<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserMeta>
 */
class UserMetaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'date_of_birth' => $this->faker->unique()->dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null),
            'favourite_food' => $this->faker->randomElement([
                'Asian', 
                'Greek', 
                'Steak', 
                'Seafood',
                'Chinese',
                'Steak,Chinese', 
                'Italian,Greek,Seafood', 
                'Asian,Greek',
                'Greek,Steak'
            ]),
            'language' => $this->faker->randomElement(['English', 'French', 'Chinese', 'Italian', 'Spanish', 'German', 'Dutch']),
            'gender' => $this->faker->randomElement(['Male', 'Female'])
        ];        
    }
}
