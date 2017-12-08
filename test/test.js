var assert = require('assert');
var app = require('../app');

var firstArray =
    [{
      'name': 'Pete',
      'id': 1,
    },
    {
      'name': 'Gargamel',
      'id': 2,
    },
    ];

var secondArray =
    [{
      'name': 'Pete',
      'cute': true
    },
    {
      'name': 'Gargamel',
      'cute': false
    }];

var combinedArray = [
  {
    'name': 'Pete',
    'id': 1,
    'cute': true
  },
  {
    'name': 'Gargamel',
    'id': 2,
    'cute': false
  }
];

describe('#addObjects', ()=>{
  it('smashes 2 objects together based on name', ()=>{
    assert.deepEqual(app.addObjects(firstArray, secondArray), combinedArray);
  });
});
