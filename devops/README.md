# Lifely Ops

## Local Environment

- Install node
- Install ansible v2.2.1.0 (`brew install ansible`) or (`brew upgrade ansible`)

## Usage

> All commands provided should be run inside the `devops` directory.

> To find out which environments are available, see `/devops/inventories/all.yml`.

### Provisioning

- To provision a specific environment, run `$ ./devops provision <environment>`

### Deployment

- To deploy to a given environment, run `$ ./devops provision <environment> -t deploy`

### Backups

- Backups are stored in amazon S3 using server side encryption. Retrieving backups is done through AWS CLI using the following command

`aws s3 cp --sse-c --sse-c-key={{ app.aws.sse_key }} s3://bucket-name/some-backup-file.tar.gz .`

## Versions
- Ansible: 2.2.1.0
