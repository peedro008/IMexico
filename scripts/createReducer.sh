scripts=$PWD
reducers="../src/store/reducers"

nameMinus=$1
nameMayus=${1^^}

cd $scripts
cd $reducers

cp -a "./entity.reducer.ts" "./${nameMinus}.reducer.ts"
sed -i "s+NEW_ENTITY+${nameMayus}+g" ${nameMinus}.reducer.ts
sed -i "s+//import newReducer+import ${nameMinus}Reducer from './${nameMinus}.reducer'\n//import newReducer+g" index.tsx
sed -i "s+//newReducer,+${nameMinus}Reducer,\n\t//newReducer,+g" index.tsx

cd $scripts

