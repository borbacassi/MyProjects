class Character {
    constructor(name,hp,attack,defense) {
        this.name = name; this.hpMax = hp; 
        this.hp = hp;
        this.attack = attack; this.defense = defense;
    }
    takeDamage(valor){
        const dano = Math.max(valor - this.defense,1);
        this.hp = Math.max(this.hp - dano,0);
        return dano
    }
    taVivo(){
        return (this.hp > 0) ? "Sim":"Não";
    }
}

class Hero extends Character{
    constructor(name){
        super(name,100,20,5);
        this.level = 1
    }
} 
let p1 = new Hero("Art")
console.log(p1)
