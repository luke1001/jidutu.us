# Create sample data structure for Biblical Language Analysis Tool

# Basic data structure for the biblical analysis tool
print("Creating Biblical Language Analysis Tool data...")

# Sample Hebrew words from Genesis 1:1
hebrew_words = {
    "bereshit": {
        "strong": "H7225", 
        "english": "beginning",
        "parsing": "noun feminine singular construct",
        "definition": "beginning, first, chief",
        "root": "rosh (head)"
    },
    "bara": {
        "strong": "H1254",
        "english": "created", 
        "parsing": "Qal perfect 3rd masculine singular",
        "definition": "to create, shape, form",
        "root": "bara (primitive root)"
    },
    "elohim": {
        "strong": "H430",
        "english": "God",
        "parsing": "noun masculine plural absolute", 
        "definition": "God, gods, rulers, judges",
        "root": "el (god, mighty one)"
    }
}

# Sample Greek words from John 1:1  
greek_words = {
    "en": {
        "strong": "G1722",
        "english": "in",
        "parsing": "preposition with dative",
        "definition": "in, on, among, with", 
        "root": "en (primary preposition)"
    },
    "arche": {
        "strong": "G746", 
        "english": "beginning",
        "parsing": "noun feminine singular dative",
        "definition": "beginning, origin, rule",
        "root": "archo (to rule)"
    },
    "logos": {
        "strong": "G3056",
        "english": "Word", 
        "parsing": "noun masculine singular nominative",
        "definition": "word, reason, account",
        "root": "lego (to say)"
    }
}

print("Hebrew lexicon sample created with", len(hebrew_words), "entries")
print("Greek lexicon sample created with", len(greek_words), "entries")

# Sample verse analysis
genesis_analysis = {
    "reference": "Genesis 1:1",
    "hebrew_text": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
    "transliteration": "bereshit bara elohim et hashamayim ve'et ha'arets", 
    "translation": "In the beginning God created the heavens and the earth",
    "word_count": 7,
    "syntax": "Subject-Verb-Object structure with temporal phrase"
}

john_analysis = {
    "reference": "John 1:1",
    "greek_text": "Ἐν ἀρχῇ ἦν ὁ λόγος",
    "transliteration": "En arche en ho logos",
    "translation": "In the beginning was the Word", 
    "word_count": 5,
    "syntax": "Predicate-Subject structure with temporal phrase"
}

print("\nVerse analysis samples created:")
print("- Genesis 1:1 (Hebrew)")
print("- John 1:1 (Greek)")

print("\nData structure ready for Biblical Language Analysis Tool!")
print("Features included:")
print("- Strong's concordance numbers")
print("- Morphological parsing")
print("- Semantic definitions")
print("- Root word analysis")
print("- Syntactic structure analysis")