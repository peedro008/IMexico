scripts=$PWD
components="../src/components"

nameMinus=$1
nameMayus=${1^}

cd $components

rm -r $nameMayus

cd $scripts