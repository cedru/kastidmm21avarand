import inquirer from 'inquirer';
inquirer 
    .prompt([
        {type: 'input', name: 'age', message: 'How old are you?'},
        {type: 'list', name: 'age2', choices: ['16','17','18','19'], message: 'How old are you?'},
        {type: 'rawlist', name: 'age3', choices: ['16','17','18','19'], message: 'How old are you?'},
        {type: 'expand', name: 'age4', message: 'How old are you?',  choices: [{key: 'a',value: '17',},{key: 'c',value: '18',},],},
        {type: 'checkbox', name: 'age5', choices: ['16','17','18','19'], message: 'How old are you?'},
        {type: 'password', name: 'age7', message: 'How old are you?'},
        {type: 'number', name: 'age8', message: 'How old are you?'},
        {type: 'confirm', name: 'age6', message: 'Are you 17?'},
        {type: 'editor', name: 'age9', message: 'How old are you?'},
    ])
    .then((answers) => {
        console.info(`You are ${answers.age} years old`);
        console.info(`You are ${answers.age2} years old`);
        console.info(`You are ${answers.age3} years old`);
        console.info(`You are ${answers.age4} years old`);
        console.info(`You are ${answers.age5} years old`);
        console.info(`You are ${answers.age7} years old`);
        console.info(`You are ${answers.age8} years old`);
        if (answers.age6 == true) {
            console.info(`You are 17 years old`)
        } else {
            console.info(`You are not 17 years old`)
        };
        console.info(`You are ${answers.age9} years old`);
    })