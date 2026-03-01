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
        return this.hp > 0;
    }

    ataca(alvo){
        const dano = this.attack;
        alvo.takeDamage(dano);
        return dano;
    }
}

class Hero extends Character{
    constructor(name, hp = 100, attack = 10, defense = 10){
        super(name,hp,attack,defense);
        this.level = 1
    }
} 
class Enemy extends Character{
    constructor(name, hp = 100, attack = 10 , defense = 10){
        super(name,hp,attack,defense);
        this.level = 1;
    }
}

class Goblin extends Enemy{
    constructor(name = "Goblin"){
        super(name,40,15,10);
    }
}

class Dragon extends Enemy{
    constructor(name = "Dragão"){
        super(name,150,30,15);
    }
    ataca(alvo){
        const dano = alvo.takeDamage(this.attack*2)
        console.log(`${this.name} atacou com baforada! Dano: ${dano}.`)
        return dano;
    }
}

class Mago extends Hero{
    constructor(name){
    super(name,80,35,10);
    }
    ataca(alvo){
        const dano = alvo.takeDamage(this.attack+5);
        console.log(`${this.name} atacou com bola de fogo; Dano causado: ${dano}`)
        return dano;
    }
}

class Batalha{
    constructor(heroi,inimigo){
        this.heroi = heroi;
        this.inimigo = inimigo;
        this.log = []
    }
    turno(){
        while (this.heroi.taVivo() && this.inimigo.taVivo()) {
           const dmg = this.heroi.ataca(this.inimigo);
           this.log.push(`${this.heroi.name} causou ${dmg} de dano`)
            if(!this.inimigo.taVivo()){ 
                return `${this.inimigo.name} Morreu! Fim do turno`
            }
            const edmg = this.inimigo.ataca(this.heroi);
            this.log.push(`${this.inimigo.name} causou ${edmg} de dano`)
            if(!this.heroi.taVivo()){
                return `${this.heroi.name} Morreu! Fim do turno`
            }
        }
    }
}
let h1 = new Mago("Art")
let e1 = new Goblin()
let b1 = new Batalha(h1,e1)
console.log(b1.turno())
console.log(b1.log)
