<?php

namespace App\Traits;

trait Price
{
    private function getCase($price): int
    {
        if (0 < $price && $price < 100)
            $case = 1;
        elseif (100 < $price && $price < 500)
            $case = 2;
        elseif (500 < $price && $price < 1000)
            $case = 3;
        else
            $case = 4;
        return $case;
    }
}
