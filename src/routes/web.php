<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\WorksController;
use App\Http\Controllers\DetailsController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get('/book',[WorksController::class,'detail_read']);
// Route::post('/make',[WorksController::class,'work_make']);
// Route::patch('/update',[WorksController::class,'detail_update']);
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');;




Route::prefix('dashboard')->group(function() {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/read',[UsersController::class,'work_read'])
    ->middleware(['auth', 'verified'])->name('work_read');
    Route::post('/delete',[WorksController::class,'work_delete']);
    Route::post('/create',[WorksController::class,'work_make']);
    Route::patch('/update',[DetailsController::class,'detail_update']);
    Route::patch('/title',[WorksController::class,'title_set']);
    Route::post('/edit',[WorksController::class,'detail_read'])->name('edit');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
