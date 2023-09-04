class Personnage
{
    constructor(pseudo, classe, sante, attaque, niveau = 1)
    {
        this.pseudo  = pseudo
        this.classe  = classe
        this.sante   = sante
        this.attaque = attaque
        this.niveau  = niveau
    }

    get informations()
    {
        return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + "."
    }

    evoluer()
    {
        this.niveau++
        console.log("Félicitations " + this.pseudo + " ! Tu passe au niveau " + this.niveau + " !")
    }

    verifierSante()
    {
        if(this.sante <= 0)
        {
            this.sante == 0
            console.log(this.pseudo + " n'a plus de point de vie. Vous avez perdu.");
        }else{
            console.log("Il reste a " + this.pseudo + ", " + this.sante + " points de vie");
        }
    }

}


class Magicien extends Personnage
{
    constructor(pseudo)
    {
        super(pseudo, "Magicien", 170, 90)
    }

    attaquer(personnage)
    {
        personnage.sante -= this.attaque
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort " + "(" + this.attaque + " dégats).");
        this.evoluer()
        personnage.verifierSante()
    }

    coupSpecial(personnage)
    {
       personnage.sante -= this.attaque * 5
       console.log(this.pseudo + " attaque avec son coup spécial puissance du superman punch " + personnage.pseudo + " (" + this.attaque * 5 + " dégats). ");
       this.evoluer()
       personnage.verifierSante()
    }
}

class Guerrier extends Personnage
{
    constructor(pseudo)
    {
        super(pseudo, "Guerrier", 350, 50)
    }

    attaquer(personnage)
    {
        personnage.sante -= this.attaque
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée " + "(" + this.attaque + " dégâts)");
        this.evoluer()
        personnage.verifierSante()
    }

    coupSpecial(personnage)
    {
       personnage.sante -= this.attaque * 5
       console.log(this.pseudo + " attaque avec son coup spécial, épée de son slip " + personnage.pseudo + " (" + this.attaque * 5 + " dégats.) ");
       this.evoluer()
       personnage.verifierSante()
    }
}


var adesanya      = new Magicien('Adesanya');
var strickland    = new Guerrier('Strickland');

console.log(adesanya.informations);
console.log(strickland.informations);

adesanya.attaquer(strickland)
console.log(strickland.informations);

strickland.attaquer(adesanya)
console.log(adesanya.informations);

adesanya.coupSpecial(strickland);