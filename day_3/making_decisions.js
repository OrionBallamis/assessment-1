let bot1attack = 30;
let bot2attack = 40;

let bot1health = 100;
let bot2health = 100;

let bot1defense = 25;

let threat = bot1health > 30;

let attacks = 0;


if (bot1attack > bot2attack) {
    console.log(`bot 1 has more attack power than bot 2`);
}
else if (bot2attack > bot1attack ) {
    console.log(`bot 2 has more attack power than bot 1`);
} else {
    console.log(`bot 1 and bot 2 have the same power`);
}


if (bot1health <= bot2attack) {
    console.log(`bot 1 has been destroyed`);
} else {
    bot1health -= bot2attack
    console.log(`bot 2 attacks, bot 1 health is ${bot1health}`);
}


if (bot1health <= bot2attack - bot1defense) {
    console.log(`bot 1 has been destroyed`)
} else {
    bot1health -= bot2attack - bot1defense;
    console.log(`bot 2 attacks, bot 1 health is ${bot1health}`);
}

if ((bot1health + 60) >= 100) {
    bot1health = 100;
} else {
    bot1health += 60;
}

console.log(`bot 1 has make some repairs, bot 1 health is at ${bot1health} `);


if (threat !== false) {
    console.log(`bot 2 will continue attacking bot 1`)
} else {
    console.log(`bot 2 will let bot 1 flee`)
}

while (threat) {
    bot2health -= bot1attack
    bot1health -= (bot2attack - bot1defense);
    attacks++

    console.log(`attack #${attacks}`)
    console.log(`bot 1 punches`)
    console.log(`bot 2 kicks`)
    
    if (bot2health < 0) {
        bot2health = 0;
    } else if (bot1health < 0) {
        bot1health = 0;
    }

    threat = bot1health > 30 && bot2health > 0;
    console.log(`bot 1 health is ${bot1health}, bot 2 health is ${bot2health}`)
}

