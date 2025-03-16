<?php

namespace App\Enums;

enum OrderStatus: int
{
    case REVIEWED = 1;
    case PROCESSING = 2;
    case DISPATCHED = 3;
    case DELIVERED = 4;
    case FAILED = 5;
}
