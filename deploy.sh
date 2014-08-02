rsync --relative --recursive --delete lib/ public/ routes/ index.js package.json livecounting.rschaosid.com@rschaosid.com:stats/server

CMDS=$(cat <<CMD

cd stats/server
npm install --production
npm install --production any-db-postgres

CMD
)

#ssh -t livecounting.rschaosid.com@rschaosid.com "$CMDS"
