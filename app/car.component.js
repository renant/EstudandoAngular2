System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarComponent = (function () {
                function CarComponent() {
                    this.title = "Cadastro de Veiculos";
                    this.car = {
                        id: 1,
                        brand: 'BMW',
                        model: 'X6',
                    };
                }
                CarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-car',
                        template: "<div class=\"container\">\n                   <h1>{{title}}</h1>\n                   <h2>Marca: {{car.brand}}</h2>\n                   <h2>Modelo: {{car.model}}</h2>\n                   <div class=\"row\">\n                        <div class=\"form-group\">\n                            <label>Marca:</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"car.brand\" placeholder=\"Marca do veiculos\"/>\n                        </div>\n                   </div>\n                   <div class=\"row\">\n                        <div class=\"form-group\">\n                            <label>Modelo:</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"car.model\" placeholder=\"Modelo do veiculos\"/>\n                        </div>\n                   </div>\n              </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarComponent);
                return CarComponent;
            })();
            exports_1("CarComponent", CarComponent);
        }
    }
});
//# sourceMappingURL=car.component.js.map