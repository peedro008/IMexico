scripts=$PWD
actions="../src/store/actions"

nameMinus=$1
nameMayus=${1^^}

cd $scripts
cd $actions

sed -i "/$nameMayus: {/,/},/d" entities.tsx
sed -i "/$nameMayus: '$nameMinus'/d" entities.tsx
rm ${nameMinus}.actions.ts

cd $scripts


