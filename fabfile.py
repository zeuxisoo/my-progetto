#!/usr/local/env python

from fabric.api import env, local, run
from fabric.contrib.project import rsync_project
from fabfile_config import config

env.hosts        = config['fabric']['hosts']
env.key_filename = config['fabric']['key_filename']

def build():
    local("make generate")

def deploy():
    rsync_project(
        remote_dir=config['rsync']['remote_dir'],
        local_dir=config['rsync']['local_dir'],
        delete=True
    )
