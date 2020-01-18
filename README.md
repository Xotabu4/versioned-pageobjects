# versioned-pageobjects
 
[+] basic one version implemented
[]



PO worst scenario schema:
```
class Base {

}

abstract class Abstract extends Base {

}

abstract class Mobile extends Abstract {

}

class MobileGuest extends Mobile {

}

class MobileAdmin extends Mobile {

}

abstract class Desktop extends Abstract {

}

class DesktopGuest extends Mobile {
    
}

class DesktopAdmin extends Mobile {

}
```