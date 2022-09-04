scripts=$PWD
views="../src/views"

nameMayus=${1^}

cd $views

cp -a "./Entity/." "./$nameMayus/"
cd $nameMayus
mv Entity.tsx $nameMayus.tsx
sed -i "s+Entity+$nameMayus+g" $nameMayus.tsx
sed -i "s+Entity+$nameMayus+g" index.tsx

cd $scripts