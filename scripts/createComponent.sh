scripts=$PWD
components="../src/components"

nameMinus=$1
nameMayus=${1^}

cd $components

cp -a "./Entity/." "./$nameMayus/"
cd $nameMayus
mv Entity.tsx $nameMayus.tsx
mv EntityIsMobile.tsx ${nameMayus}IsMobile.tsx
sed -i "s+Entity+$nameMayus+g" $nameMayus.tsx
sed -i "s+Entity+$nameMayus+g" ${nameMayus}IsMobile.tsx
sed -i "s+Entity+$nameMayus+g" index.tsx

cd $scripts