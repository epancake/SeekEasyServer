var assert = require('assert');
var app = require('../app');
var testData = []
var firstArray =
    [{
      'name': 'Lena',
      'patio': true,
    },
    {
      'name': 'Gozo',
      'patio': false,
    },
    ];

var secondArray =
    [{
      'name': 'Lena',
      'address': '24 Broadway St',
      'website': 'https://www.lenadenver.com/happy-hour'
    },
    {
      'name': 'Gozo',
      'address': '30 South Broadway St',
      'website': 'http://gozodenver.com/happy-hour/'
    },
    ];

var combinedArray = [
  {
    'name': 'Lena',
    'patio': true,
    'address': '24 Broadway St',
    'website': 'https://www.lenadenver.com/happy-hour'
  },
  {
    'name': 'Gozo',
    'patio': false,
    'address': '30 South Broadway St',
    'website': 'http://gozodenver.com/happy-hour/'
  }
];

aloneObject = {
  'name': 'Lena',
  'patio': true,
};

smashedObject = {
  'name': 'Lena',
  'patio': true,
  'address': '24 Broadway St',
  'website': 'https://www.lenadenver.com/happy-hour'
};

describe('#addObjects', ()=>{
  it('returns an array of all the smashed together objects', ()=>{
    assert.deepEqual(app.addObjects(firstArray, secondArray), combinedArray);
  });
});

describe('#combineObjects', ()=>{
  it('smashes 2 objects together based on name', ()=>{
    assert.deepEqual(app.combineObjects(aloneObject, secondArray), smashedObject);
  });
});
