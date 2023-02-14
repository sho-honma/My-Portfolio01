<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('work_id');
            $table->integer('section_id');
            $table->string('detail_title')->nullable();
            $table->text('description')->nullable();
            $table->integer('important')->nullable();
            $table->string('date')->nullable();
            $table->string('color')->nullable();
            $table->timestamps();
            $table->foreign('work_id')->references('id')->on('works')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('details');
    }
};
