#!/usr/bin/env python3

import hashlib
import random

a = hashlib.sha1(str(random.getrandbits(256)))

print(a)

