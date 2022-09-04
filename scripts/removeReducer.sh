scripts=$PWD
reducers="../src/store/reducers"

nameMinus=$1

cd $reducers

rm ${nameMinus}.reducer.ts
sed -i "/import ${nameMinus}Reducer from '.\/${nameMinus}.reducer'/d" index.tsx
sed -i "/${nameMinus}Reducer,/d" index.tsx

cd $scripts