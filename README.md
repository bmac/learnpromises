## How to Build

* If needed, install [NPM](https://npmjs.org/)
* If needed, install [grunt](http://gruntjs.com/)
* If needed, install jekyll `sudo gem install jekyll`
* If needed, install [pygments](http://pygments.org/docs/installation/)
* Build with `grunt`
* Build + run test server with `grunt serve`

## How to Translate

Translation files live in the `translations` directory. Each file is a [2-letter ISO 639-1 language code](http://www.loc.gov/standards/iso639-2/php/code_list.php) and the YAML file extention.

If you're not familiar with YAML, it's a very simple human-readable data format. Each line contains a translation code, a colon, and a value in quotes. The translation codes are the same in every language, and the actual translation on the right is in the appropriate language for the file.

To contribute to a translation, start with `en.yaml` and either open an issue or make pull requests against this repository if you know how.

To test a translation, change the `lang` property in `_config.yml` before you build.
