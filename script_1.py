# Create comprehensive sample data for the Biblical Language Analysis Tool
import json

# Sample biblical language analysis data
biblical_data = {
    "hebrew_lexicon": {
        "H430": {
            "strong_number": "H430",
            "word": "elohim",
            "transliteration": "elohim", 
            "definition": "God, gods, rulers, judges",
            "part_of_speech": "noun masculine plural",
            "root": "el",
            "semantic_range": ["The one true God", "False gods", "Rulers as divine representatives"],
            "morphology": {"gender": "masculine", "number": "plural", "state": "absolute"}
        },
        "H1254": {
            "strong_number": "H1254", 
            "word": "bara",
            "transliteration": "bara",
            "definition": "to create, make, form",
            "part_of_speech": "verb",
            "root": "bara",
            "semantic_range": ["Divine creative activity", "To make or fashion", "To bring into existence"],
            "morphology": {"stem": "Qal", "aspect": "Perfect", "person": "3rd", "gender": "masculine", "number": "singular"}
        }
    },
    "greek_lexicon": {
        "G2316": {
            "strong_number": "G2316",
            "word": "theos", 
            "transliteration": "theos",
            "definition": "God, god, divine being",
            "part_of_speech": "noun masculine",
            "root": "theos",
            "semantic_range": ["The one true God", "False gods", "Divine beings"],
            "morphology": {"gender": "masculine", "number": "singular", "case": "nominative"}
        },
        "G3056": {
            "strong_number": "G3056",
            "word": "logos",
            "transliteration": "logos", 
            "definition": "word, reason, account",
            "part_of_speech": "noun masculine",
            "root": "lego",
            "semantic_range": ["A word or statement", "Divine Word (Christ)", "Reason or logic"],
            "morphology": {"gender": "masculine", "number": "singular", "case": "nominative"}
        }
    },
    "sample_verses": {
        "genesis_1_1": {
            "reference": "Genesis 1:1",
            "hebrew_text": "bereshit bara elohim et hashamayim ve'et ha'arets",
            "translation": "In the beginning God created the heavens and the earth",
            "words": [
                {"hebrew": "bereshit", "strong": "H7225", "english": "beginning", "parsing": "noun fem sing construct"},
                {"hebrew": "bara", "strong": "H1254", "english": "created", "parsing": "Qal perfect 3ms"},
                {"hebrew": "elohim", "strong": "H430", "english": "God", "parsing": "noun masc plur abs"},
                {"hebrew": "et", "strong": "H853", "english": "[obj marker]", "parsing": "particle"}
            ]
        }
    }
}

# Convert to JSON string
json_data = json.dumps(biblical_data, ensure_ascii=False, indent=2)
print("Biblical language data created successfully!")
print("Sample data structure:")
print(json_data[:500] + "...")