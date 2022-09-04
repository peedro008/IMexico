scripts=$PWD
controllers="../src/controllers"

nameMinus=$1
nameMayus=${1^}

cd $controllers

cp -a "./Entity/." "./$nameMayus/"
cd $nameMayus
mv Entity.tsx $nameMayus.tsx
sed -i "s+Entity+$nameMayus+g" $nameMayus.tsx
sed -i "s+entity+$nameMinus+g" $nameMayus.tsx
sed -i "s+Entity+$nameMayus+g" index.tsx

cd $scripts