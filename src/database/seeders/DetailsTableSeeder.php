<?php

namespace Database\Seeders;

use App\Models\Detail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        for ($i = 1; $i < 41; $i++) {
            Detail::create([
                'work_id' => 1,
                'section_id' => $i,
                'detail_title'=>'eeee',
                'description' => 'comcom',
                'important'=>20,
                'date'=>'111',
                'color'=>111
            ]);
            }   
        for ($i = 1; $i < 41; $i++) {
            Detail::create([
                'work_id' => 2,
                'section_id' => $i,
                'detail_title'=>'eeee',
                'detail_title'=>'qqqqq',
                'description' => 'comcom',
                'important'=>20,
                'date'=>'111',
                'color'=>111
            ]);
            }   
            
    }    
}
