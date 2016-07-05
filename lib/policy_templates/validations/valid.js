var builder = require('xmlbuilder');
var fs = require('fs');
var path = require('path');

// Get document, or throw exception on error
try {
} catch (e) {
  console.log(e);
}

module.exports = {
  validationsTemplate: validationsTemplate,
  validationsGenTemplate: validationsGenTemplate
};

function validationsTemplate(options) {
  var continueOnError = options.continueOnError || 'true';
  var enabled = options.enabled || 'true';
  var name = options.name;
  var displayName = options.displayName || name;
  var msg = builder.create('Javascript');
  msg.att('continueOnError', continueOnError);
  msg.att('enabled', enabled);
  msg.att('timeLimit', '200');
  msg.att('name', displayName);
  msg.ele('DisplayName', {}, displayName);
  msg.ele('Properties', {});
  msg.ele('ResourceURL', 'jsc://schema-validation.js');
  var xmlString = msg.end({ pretty: true, indent: '  ', newline: '\n' });
  return xmlString;
}

function validationsGenTemplate(options, name) {
  var templateOptions = options;
  templateOptions.count = options.allow;
  templateOptions.name = name;

  return validationsTemplate(templateOptions);
}