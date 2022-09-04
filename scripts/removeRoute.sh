scripts=$PWD
routes="../src"

nameMinus=$1
nameMayus=${1^}
project=$2

cd $routes

sed -i "/import { $nameMayus } from \".\/controllers\/$nameMayus\"/d" App.tsx
sed -i "/<Route exact component={$nameMayus} path=\"\/$nameMinus\" \/>/d" App.tsx

cd $scripts