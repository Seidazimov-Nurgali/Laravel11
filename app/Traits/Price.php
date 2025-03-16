<?php

namespace App\Traits;

trait Price
{
    private function getCase($price): int
    {
        if ($price > 0 && $price < 100) {
            $case = 1;
        } elseif ($price > 100 && $price < 500) {
            $case = 2;
        } elseif ($price > 500 && $price < 1000) {
            $case = 3;
        } else {
            $case = 4;
        }

        return $case;
    }
}
