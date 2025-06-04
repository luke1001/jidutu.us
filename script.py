# Create comprehensive sample data for the Biblical Language Analysis Tool
import json

# Sample Hebrew and Greek biblical language data
biblical_language_data = {
    "hebrew_lexicon": {
        "H430": {
            "strong_number": "H430",
            "word": "אֱלֹהִים",
            "transliteration": "elohim",
            "pronunciation": "el-o-heem'",
            "part_of_speech": "noun masculine plural",
            "root": "אֵל",
            "definition": "God, gods, rulers, judges",
            "semantic_range": [
                "The one true God",
                "False gods, idols",
                "Rulers, judges (as representatives of God)",
                "Angels, divine beings"
            ],
            "etymology": "Plural of H433; probably from H410",
            "morphology": {
                "gender": "masculine",
                "number": "plural",
                "state": "absolute"
            },
            "usage_notes": "Though grammatically plural, often used with singular verbs when referring to the one true God"
        },
        "H1254": {
            "strong_number": "H1254",
            "word": "בָּרָא",
            "transliteration": "bara",
            "pronunciation": "baw-raw'",
            "part_of_speech": "verb",
            "root": "ברא",
            "definition": "to create, make, form",
            "semantic_range": [
                "To create (divine activity)",
                "To make, fashion",
                "To bring into existence"
            ],
            "etymology": "A primitive root",
            "morphology": {
                "stem": "Qal",
                "aspect": "Perfect",
                "person": "3rd",
                "gender": "masculine",
                "number": "singular"
            },
            "usage_notes": "Often used specifically of divine creative activity"
        },
        "H853": {
            "strong_number": "H853",
            "word": "אֵת",
            "transliteration": "eth",
            "pronunciation": "ayth",
            "part_of_speech": "particle",
            "root": "את",
            "definition": "direct object marker",
            "semantic_range": [
                "Untranslatable grammatical marker indicating direct object",
                "Sometimes 'with' in compound expressions"
            ],
            "etymology": "Primitive particle",
            "morphology": {
                "type": "definite direct object marker"
            },
            "usage_notes": "Used before definite direct objects; untranslatable in English"
        },
        "H8064": {
            "strong_number": "H8064",
            "word": "שָׁמַיִם",
            "transliteration": "shamayim",
            "pronunciation": "shaw-mah'-yim",
            "part_of_speech": "noun masculine plural",
            "root": "שמם",
            "definition": "heaven, heavens, sky",
            "semantic_range": [
                "The visible heavens, sky",
                "The dwelling place of God",
                "The abode of the stars"
            ],
            "etymology": "Dual of H8065",
            "morphology": {
                "gender": "masculine",
                "number": "dual/plural",
                "state": "absolute"
            },
            "usage_notes": "Always plural in form, can refer to atmospheric or celestial heavens"
        },
        "H776": {
            "strong_number": "H776",
            "word": "אֶרֶץ",
            "transliteration": "erets",
            "pronunciation": "eh'-rets",
            "part_of_speech": "noun feminine singular",
            "root": "ארץ",
            "definition": "earth, land, ground",
            "semantic_range": [
                "The whole earth",
                "A specific land or country",
                "Ground, soil",
                "The inhabited world"
            ],
            "etymology": "From an unused root meaning to be firm",
            "morphology": {
                "gender": "feminine",
                "number": "singular",
                "state": "absolute"
            },
            "usage_notes": "Can refer to the physical earth or to specific territories"
        }
    },
    "greek_lexicon": {
        "G2316": {
            "strong_number": "G2316",
            "word": "θεός",
            "transliteration": "theos",
            "pronunciation": "theh'-os",
            "part_of_speech": "noun masculine",
            "root": "θεός",
            "definition": "God, god, divine being",
            "semantic_range": [
                "The one true God",
                "False gods",
                "Divine beings",
                "Things treated as objects of worship"
            ],
            "etymology": "Of uncertain affinity; a deity",
            "morphology": {
                "gender": "masculine",
                "number": "singular",
                "case": "nominative"
            },
            "usage_notes": "When referring to the true God, often used with the definite article"
        },
        "G3056": {
            "strong_number": "G3056",
            "word": "λόγος",
            "transliteration": "logos",
            "pronunciation": "log'-os",
            "part_of_speech": "noun masculine",
            "root": "λέγω",
            "definition": "word, reason, account",
            "semantic_range": [
                "A word, speech, statement",
                "A saying, doctrine",
                "The divine Word (Christ)",
                "Reason, logic"
            ],
            "etymology": "From G3004; something said",
            "morphology": {
                "gender": "masculine",
                "number": "singular",
                "case": "nominative"
            },
            "usage_notes": "Theologically significant as title for Christ in John's Gospel"
        },
        "G1722": {
            "strong_number": "G1722",
            "word": "ἐν",
            "transliteration": "en",
            "pronunciation": "en",
            "part_of_speech": "preposition",
            "root": "ἐν",
            "definition": "in, on, among, with",
            "semantic_range": [
                "Locative: in, within, among",
                "Temporal: during, in the time of",
                "Instrumental: by means of, with",
                "Causal: because of"
            ],
            "etymology": "A primary preposition",
            "morphology": {
                "type": "preposition",
                "case_governed": "dative"
            },
            "usage_notes": "One of the most common prepositions in the NT; governs dative case"
        },
        "G746": {
            "strong_number": "G746",
            "word": "ἀρχή",
            "transliteration": "arche",
            "pronunciation": "ar-khay'",
            "part_of_speech": "noun feminine",
            "root": "ἄρχω",
            "definition": "beginning, origin, rule",
            "semantic_range": [
                "Beginning, commencement",
                "Origin, source",
                "Rule, authority",
                "Ruler, magistrate"
            ],
            "etymology": "From G756; a commencement",
            "morphology": {
                "gender": "feminine",
                "number": "singular",
                "case": "dative"
            },
            "usage_notes": "Can denote temporal beginning or position of authority"
        },
        "G1510": {
            "strong_number": "G1510",
            "word": "εἰμί",
            "transliteration": "eimi",
            "pronunciation": "i-mee'",
            "part_of_speech": "verb",
            "root": "εἰμί",
            "definition": "I am, to be, exist",
            "semantic_range": [
                "To be, exist",
                "To happen, occur",
                "To be present",
                "Copulative function"
            ],
            "etymology": "First person singular present indicative of substantive verb",
            "morphology": {
                "tense": "imperfect",
                "voice": "active",
                "mood": "indicative",
                "person": "3rd",
                "number": "singular"
            },
            "usage_notes": "The most common verb in Greek; can function as copula or substantive verb"
        }
    },
    "sample_verses": {
        "genesis_1_1": {
            "reference": "Genesis 1:1",
            "hebrew_text": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
            "transliteration": "bereshit bara elohim et hashamayim ve'et ha'arets",
            "translation": "In the beginning God created the heavens and the earth",
            "word_analysis": [
                {
                    "position": 1,
                    "hebrew_word": "בְּרֵאשִׁית",
                    "transliteration": "bereshit",
                    "strong_number": "H7225",
                    "english": "beginning",
                    "parsing": "Noun feminine singular construct with preposition בְּ",
                    "semantic_notes": "Temporal phrase indicating the commencement of creation"
                },
                {
                    "position": 2,
                    "hebrew_word": "בָּרָא",
                    "transliteration": "bara",
                    "strong_number": "H1254",
                    "english": "created",
                    "parsing": "Qal perfect 3rd masculine singular",
                    "semantic_notes": "Divine creative activity; often used exclusively of God's creative work"
                },
                {
                    "position": 3,
                    "hebrew_word": "אֱלֹהִים",
                    "transliteration": "elohim",
                    "strong_number": "H430",
                    "english": "God",
                    "parsing": "Noun masculine plural absolute",
                    "semantic_notes": "Though plural in form, refers to the one true God; takes singular verb"
                },
                {
                    "position": 4,
                    "hebrew_word": "אֵת",
                    "transliteration": "et",
                    "strong_number": "H853",
                    "english": "[direct object marker]",
                    "parsing": "Particle - direct object marker",
                    "semantic_notes": "Untranslatable particle marking definite direct object"
                },
                {
                    "position": 5,
                    "hebrew_word": "הַשָּׁמַיִם",
                    "transliteration": "hashamayim",
                    "strong_number": "H8064",
                    "english": "the heavens",
                    "parsing": "Definite article + noun masculine plural",
                    "semantic_notes": "The celestial realm; can refer to atmospheric or celestial heavens"
                },
                {
                    "position": 6,
                    "hebrew_word": "וְאֵת",
                    "transliteration": "ve'et",
                    "strong_number": "H853",
                    "english": "and [direct object marker]",
                    "parsing": "Conjunction waw + particle",
                    "semantic_notes": "Coordinating conjunction plus direct object marker"
                },
                {
                    "position": 7,
                    "hebrew_word": "הָאָרֶץ",
                    "transliteration": "ha'arets",
                    "strong_number": "H776",
                    "english": "the earth",
                    "parsing": "Definite article + noun feminine singular",
                    "semantic_notes": "The terrestrial realm; the physical earth as opposed to the heavens"
                }
            ],
            "syntactic_analysis": {
                "sentence_type": "Declarative statement",
                "clause_structure": "Subject-Verb-Object",
                "grammatical_relations": [
                    "אֱלֹהִים (elohim) - Subject",
                    "בָּרָא (bara) - Main verb",
                    "הַשָּׁמַיִם (hashamayim) - Direct object 1",
                    "הָאָרֶץ (ha'arets) - Direct object 2"
                ],
                "semantic_structure": "Agent-Action-Patient relationship expressing divine creative activity"
            }
        },
        "john_1_1": {
            "reference": "John 1:1",
            "greek_text": "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.",
            "transliteration": "En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos.",
            "translation": "In the beginning was the Word, and the Word was with God, and the Word was God.",
            "word_analysis": [
                {
                    "position": 1,
                    "greek_word": "Ἐν",
                    "transliteration": "En",
                    "strong_number": "G1722",
                    "english": "In",
                    "parsing": "Preposition governing dative",
                    "semantic_notes": "Temporal preposition indicating 'at the time of'"
                },
                {
                    "position": 2,
                    "greek_word": "ἀρχῇ",
                    "transliteration": "arche",
                    "strong_number": "G746",
                    "english": "beginning",
                    "parsing": "Noun feminine singular dative",
                    "semantic_notes": "Temporal beginning; origin or commencement"
                },
                {
                    "position": 3,
                    "greek_word": "ἦν",
                    "transliteration": "en",
                    "strong_number": "G1510",
                    "english": "was",
                    "parsing": "Imperfect active indicative 3rd singular",
                    "semantic_notes": "Continuous existence in past time; implies pre-existence"
                },
                {
                    "position": 4,
                    "greek_word": "ὁ",
                    "transliteration": "ho",
                    "strong_number": "G3588",
                    "english": "the",
                    "parsing": "Definite article masculine singular nominative",
                    "semantic_notes": "Definite article emphasizing the specific identity"
                },
                {
                    "position": 5,
                    "greek_word": "λόγος",
                    "transliteration": "logos",
                    "strong_number": "G3056",
                    "english": "Word",
                    "parsing": "Noun masculine singular nominative",
                    "semantic_notes": "Divine Word; theologically refers to Christ as the eternal Word of God"
                }
            ],
            "syntactic_analysis": {
                "sentence_type": "Complex declarative with three coordinate clauses",
                "clause_structure": "Prepositional phrase + Subject + Verb (repeated pattern)",
                "grammatical_relations": [
                    "Clause 1: Ἐν ἀρχῇ (temporal phrase), ὁ λόγος (subject), ἦν (copulative verb)",
                    "Clause 2: ὁ λόγος (subject), ἦν (copulative verb), πρὸς τὸν θεόν (prepositional phrase)",
                    "Clause 3: θεὸς (predicate nominative), ἦν (copulative verb), ὁ λόγος (subject)"
                ],
                "semantic_structure": "Three parallel statements about the eternal existence, relationship, and nature of the Word"
            }
        }
    }
}

# Save the data to a JSON file for use in the application
with open('biblical_language_data.json', 'w', encoding='utf-8') as f:
    json.dump(biblical_language_data, f, ensure_ascii=False, indent=2)

print("Biblical language analysis data created successfully!")
print("Data includes:")
print("- Hebrew lexicon entries with morphological and semantic analysis")
print("- Greek lexicon entries with parsing and definitions")  
print("- Sample verses (Genesis 1:1 and John 1:1) with complete word-by-word analysis")
print("- Syntactic and semantic analysis for each verse")