const chromedriver = require('chromedriver');

module.exports = {
	'src_folders': [
		'./e2e-tests/tests/'
	],
	'output_folder': './e2e-tests/reports/',
	'webdriver' : {
		'start_process': true,
		'server_path': chromedriver.path,
		'host': '127.0.0.1',
		'port': 9515,
	},
	'test_workers': {
		'enabled': false,
		'workers': 'auto'
	},
	'test_settings': {
		'default': {
			'webdriver': {
				'server_path': chromedriver.path
			},
			'desiredCapabilities': {
				'browserName': 'chrome'
			}
		},
		'chrome': {
			'webdriver' : {
				'start_process': true,
				'server_path': chromedriver.path,
				'host': '127.0.0.1',
				'port': 9515,
			},
			'screenshots': {
				'enabled': true,
				'path': './e2e-tests/screenshots/'
			},
			'globals': {
				'waitForConditionTimeout': 5000
			},
			'desiredCapabilities': {
				'browserName': 'chrome',
				'javascriptEnabled': true,
				'acceptInsecureCerts' : true
			}
		}
	}
};
