// Same test for 12 versions
it('search', async function () {
    await APP.home.open();
    const searchParams = new DefaultSearchParams()
    await APP.home.searchForm.doSearch(searchParams);
    await APP.searchResults.waitSearchCompleted();
    const actualSearchParams = await APP.searchResults.getSearchParams();
    expect(actualSearchParams).toEqual(searchParams,
        `Search should be completed with used search params`)
});


"web:test-sixtmydriver": "protractor --application=MYDRIVER",
"web:test-sixtmydriver-mobile": "protractor --application=MYDRIVER --screenType=MOBILE",
"web:test-sixtride": "protractor",
"web:test-sixtride-prod": "protractor --environment=PRODUCTION",
"web:test-sixtride-mobile": "protractor --screenType=MOBILE",
"web:test-sixtride-prod-mobile": "protractor --environment=PRODUCTION --screenType=MOBILE",
"web:test-sixtlimousine": "protractor --application=LIMOUSINE",
"web:test-sixtlimousine-mobile": "protractor --application=LIMOUSINE --screenType=MOBILE",
"web:test-sixtetihad": "protractor --application=ETIHAD",
"web:test-sixtetihad-mobile": "protractor --application=ETIHAD --screenType=MOBILE"
