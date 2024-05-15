for (let i = 1; i <= 8; i++) {
    $httpClient.get(`https://ptest-${i}.ipcheck.ing`, () => $done());
}
