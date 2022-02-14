for ((i = 0 ; i <= 300 ; i++)); do
  git branch test-$i
  git push origin test-$i
done