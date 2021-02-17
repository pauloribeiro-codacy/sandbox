#!/usr/bin/env python3

import hashlib
import random
import telnetlib
import requests

a = hashlib.sha1(str(random.getrandbits(256)))

b = requests.get("https://gmail.com", verify=False)

print(a)

