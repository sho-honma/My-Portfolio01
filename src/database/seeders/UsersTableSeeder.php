<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'taro',
            'email' => 'hewwwo@mail.com',
            'password'=>'wwwwwwww'
        ]);
        User::create([
            'name' => 'taro',
            'email' => 'qqqqwo@mail.com',
            'password'=>'wwwwwwww'
        ]);
    }
       
    }
