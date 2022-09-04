scripts=$PWD
routes="../src"

nameMinus=$1
nameMayus=${1^}
project=$2

cd $routes

sed -i "s+// import+import { $nameMayus } from \"./controllers/$nameMayus\"\n// import+g" App.tsx
sed -i "s+{/\* $project \*/}+<Route exact component={$nameMayus} path=\"/$nameMinus\" />\n\t\t\t\t\t\t\t\t{/* $project */}+g" App.tsx

cd $scripts