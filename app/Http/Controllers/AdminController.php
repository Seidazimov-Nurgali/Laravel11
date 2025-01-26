<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //golda31@example.com
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }
}
