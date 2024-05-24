/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const project = {

    cards: {
        mis_empresarios: 7,
        mis_emprendedores: 36,
        pedidos_mensuales: 203 ,
        promedio_ventas: 1063500
    },

    perfil     : {
        columns: ['invitador', 'lider_despachos', 'empresario_hace', 'ciudad', 'telefono', 'correo'],
        rows   : [
            {
                invitador: 'MIGUEL ANGEL',
                lider_despachos: 'NATALIA ANDREA MUNERA',
                empresario_hace: '5 años, 6 meses, 19 dias', // contar los dias desde que ingreso al sistema
                fecha_ingreso: '2018-11-01', //crear un campo para guardar la fecha de ingreso
                ciudad: 'Pereira',
                telefono: 3148750223,
                correo: 'kevinosorio95@hotmail.com',
            },
        ],
    },

    newVsReturning     : {
        uniqueVisitors: 46085,
        series        : [80, 20],
        labels        : [
            'New',
            'Returning',
        ],
    },
    gender             : {
        uniqueVisitors: 46085,
        series        : [55, 45],
        labels        : [
            'Male',
            'Female',
        ],
    },
    age                : {
        uniqueVisitors: 46085,
        series        : [35, 65],
        labels        : [
            'Under 30',
            'Over 30',
        ],
    },
    language           : {
        uniqueVisitors: 46085,
        series        : [25, 75],
        labels        : [
            'English',
            'Other',
        ],
    },

    githubIssues      : {
        overview: {
            'this-week': {
                'new-issues'   : 214,
                'closed-issues': 75,
                'fixed'        : 3,
                'wont-fix'     : 4,
                're-opened'    : 8,
                'needs-triage' : 6,
            },
        },
        labels  : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
        series  : {
            'ventas-mes': [
                {
                    name: 'Ventas este mes',
                    type: 'column',
                    data: [1109461, 1637453, 2289049, 1763182, 2035679, 987654, 2130578, 1389204, 1825347, 1234567, 2498603, 1947689],
                },
            ],
        },
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287,
            },
        },
        labels  : ['API', 'Backend', 'Frontend', 'Issues'],
        series  : {
            'this-week': [15, 20, 38, 27],
            'last-week': [19, 16, 42, 23],
        },
    },
    schedule          : {
        today   : [
            {
                title   : 'Group Meeting',
                time    : 'in 32 minutes',
                location: 'Conference room 1B',
            },
            {
                title: 'Coffee Break',
                time : '10:30 AM',
            },
            {
                title: 'Public Beta Release',
                time : '11:00 AM',
            },
            {
                title: 'Lunch',
                time : '12:10 PM',
            },
            {
                title   : 'Dinner with David',
                time    : '05:30 PM',
                location: 'Magnolia',
            },
            {
                title   : 'Jane\'s Birthday Party',
                time    : '07:30 PM',
                location: 'Home',
            },
            {
                title   : 'Overseer\'s Retirement Party',
                time    : '09:30 PM',
                location: 'Overseer\'s room',
            },
        ],
        tomorrow: [
            {
                title   : 'Marketing Meeting',
                time    : '09:00 AM',
                location: 'Conference room 1A',
            },
            {
                title: 'Public Announcement',
                time : '11:00 AM',
            },
            {
                title: 'Lunch',
                time : '12:10 PM',
            },
            {
                title   : 'Meeting with Beta Testers',
                time    : '03:00 PM',
                location: 'Conference room 2C',
            },
            {
                title: 'Live Stream',
                time : '05:30 PM',
            },
            {
                title   : 'Release Party',
                time    : '07:30 PM',
                location: 'CEO\'s house',
            },
            {
                title   : 'CEO\'s Private Party',
                time    : '09:30 PM',
                location: 'CEO\'s Penthouse',
            },
        ],
    },
    budgetDistribution: {
        categories: ['Anillos', 'Aretes', 'Cadenas', 'Cruceros', 'Dijes', 'Exclusividades', 'Herrajes', 'Otros', 'Pusleras', 'Rosarios'],
        series    : [
            {
                name: 'Budget',
                data: [12, 8, 20, 15, 5, 10, 6, 9, 7, 8],
            },
        ],
    },
    weeklyExpenses    : {
        amount: 17663,
        labels: [
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [4412, 4345, 4541, 4677, 4322, 4123],
            },
        ],
    },
    monthlyExpenses   : {
        amount: 54663,
        labels: [
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [15521, 15519, 15522, 15521],
            },
        ],
    },
    yearlyExpenses    : {
        amount: 648813,
        labels: [
            now.minus({days: 79}).toFormat('dd MMM') + ' - ' + now.minus({days: 72}).toFormat('dd MMM'),
            now.minus({days: 71}).toFormat('dd MMM') + ' - ' + now.minus({days: 64}).toFormat('dd MMM'),
            now.minus({days: 63}).toFormat('dd MMM') + ' - ' + now.minus({days: 56}).toFormat('dd MMM'),
            now.minus({days: 55}).toFormat('dd MMM') + ' - ' + now.minus({days: 48}).toFormat('dd MMM'),
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM'),
        ],
        series: [
            {
                name: 'Expenses',
                data: [45891, 45801, 45834, 45843, 45800, 45900, 45814, 45856, 45910, 45849],
            },
        ],
    },
    budgetDetails     : {
        columns: ['type', 'total', 'expensesAmount', 'expensesPercentage', 'remainingAmount', 'remainingPercentage'],
        rows   : [
            {
                id                 : 1,
                type               : 'Concept',
                total              : 14880,
                expensesAmount     : 14000,
                expensesPercentage : 94.08,
                remainingAmount    : 880,
                remainingPercentage: 5.92,
            },
        ],
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-10.jpg',
            name  : 'Nadia Mcknight',
            email : 'nadiamcknight@mail.com',
            phone : '+1-943-511-2203',
            title : 'Project Director',
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Best Blackburn',
            email : 'blackburn.best@beadzza.me',
            phone : '+1-814-498-3701',
            title : 'Senior Developer',
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Duncan Carver',
            email : 'duncancarver@mail.info',
            phone : '+1-968-547-2111',
            title : 'Senior Developer',
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Martin Richards',
            email : 'martinrichards@mail.biz',
            phone : '+1-902-500-2668',
            title : 'Junior Developer',
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Candice Munoz',
            email : 'candicemunoz@mail.co.uk',
            phone : '+1-838-562-2769',
            title : 'Lead Designer',
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Vickie Mosley',
            email : 'vickiemosley@mail.net',
            phone : '+1-939-555-3054',
            title : 'Designer',
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Tina Harris',
            email : 'tinaharris@mail.ca',
            phone : '+1-933-464-2431',
            title : 'Designer',
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Holt Manning',
            email : 'holtmanning@mail.org',
            phone : '+1-822-531-2600',
            title : 'Marketing Manager',
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Misty Ramsey',
            email : 'mistyramsey@mail.us',
            phone : '+1-990-457-2106',
            title : 'Consultant',
        },
    ],
};
