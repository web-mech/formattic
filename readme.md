# Formattic
CLI for web/css/js prettification

## Installation
Install with npm

	$ npm install -g formattic

## Usage

	$ fomattic -h
  
	Usage: formattic [options]
	
	Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -p, --path [path]      input directory
    -f, --filter [filter]  type of files to format
    -s, --standardize      standardize code
    -w, --watch            watch and auto-format code

### TODO
- https://github.com/uber/standard-format
- https://github.com/maxogden/standard-format
- https://github.com/benjamn/recast
- .formatticrc configuration
- STREAMS: finder returns a stream in which transforms are added in the form of middleware.