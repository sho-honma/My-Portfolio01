<?php

namespace Database\Seeders;

use App\Models\Work;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
    
        Work::create([
            'user_id' => 1,
            'item_title' => 'hello',
        ]);
        Work::create([
            'user_id' => 2,
            'item_title' => 'hello',
        ]);
           
    }
}
