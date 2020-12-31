# tidal-doc

## Install

This website is built using [mkdocs](https://www.mkdocs.org/).  We recommend
you create a virtual environment for Python 3 first:

```
virtualenv -p python3 .venv/
```

Then, activate it and install requirements:

```
source .venv/bin/activate
pip install -r requirements.txt
```

## Usage

Run `mkdocs serve` to start a local web server. Then visit
http://localhost:8000/ on your browser.  Page will refresh when some file
changes.

There is a GitHub Action config file that automatically deploys on pushes in
the main branch, so there is no need to deploy manually.  Please read more
[here](https://www.mkdocs.org/user-guide/deploying-your-docs/).


## License

(c) contributors
Licensed under Creative commons CC-BY-SA
