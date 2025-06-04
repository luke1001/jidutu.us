// Biblical Language Analysis Tool - JavaScript

class BiblicalAnalysisTool {
    constructor() {
        this.currentVerse = null;
        this.selectedWord = null;
        this.initializeData();
        this.bindEvents();
        this.populateGlossary();
    }

    initializeData() {
        // Hebrew lexicon data
        this.hebrewLexicon = {
            "H7225": {
                "strong_number": "H7225",
                "word": "רֵאשִׁית",
                "transliteration": "reshit",
                "pronunciation": "ray-sheeth'", 
                "definition": "beginning, first, chief",
                "part_of_speech": "noun feminine",
                "root": "רֹאשׁ (rosh)",
                "semantic_range": ["beginning in time", "first in place", "chief in rank", "choice part"],
                "morphology": "feminine singular construct",
                "usage_notes": "Often used of temporal beginnings; in construct with following noun"
            },
            "H1254": {
                "strong_number": "H1254", 
                "word": "בָּרָא",
                "transliteration": "bara",
                "pronunciation": "baw-raw'",
                "definition": "to create, shape, form",
                "part_of_speech": "verb",
                "root": "בָּרָא (bara)",
                "semantic_range": ["to create (divine activity)", "to make", "to form", "to fashion"],
                "morphology": "Qal perfect 3rd masculine singular", 
                "usage_notes": "Often used specifically of divine creative activity; emphasizes bringing into existence"
            },
            "H430": {
                "strong_number": "H430",
                "word": "אֱלֹהִים", 
                "transliteration": "elohim",
                "pronunciation": "el-o-heem'",
                "definition": "God, gods, rulers, judges",
                "part_of_speech": "noun masculine",
                "root": "אֵל (el)",
                "semantic_range": ["the one true God", "false gods", "rulers", "judges", "divine beings"],
                "morphology": "masculine plural absolute",
                "usage_notes": "Though plural in form, often takes singular verbs when referring to the one true God"
            },
            "H853": {
                "strong_number": "H853",
                "word": "אֵת",
                "transliteration": "eth", 
                "pronunciation": "ayth",
                "definition": "direct object marker",
                "part_of_speech": "particle",
                "root": "primitive particle",
                "semantic_range": ["untranslatable marker of definite direct object"],
                "morphology": "particle",
                "usage_notes": "Grammatical marker with no English equivalent; indicates definite direct object"
            },
            "H8064": {
                "strong_number": "H8064",
                "word": "שָׁמַיִם",
                "transliteration": "shamayim",
                "pronunciation": "shaw-mah'-yim", 
                "definition": "heaven, heavens, sky",
                "part_of_speech": "noun masculine",
                "root": "שָׁמֶה (shameh)",
                "semantic_range": ["visible heavens/sky", "dwelling place of God", "celestial realm"],
                "morphology": "masculine dual/plural absolute with definite article",
                "usage_notes": "Always plural in form; can refer to atmospheric or celestial heavens"
            },
            "H776": {
                "strong_number": "H776",
                "word": "אֶרֶץ",
                "transliteration": "erets",
                "pronunciation": "eh'-rets",
                "definition": "earth, land, ground", 
                "part_of_speech": "noun feminine",
                "root": "unused root meaning to be firm",
                "semantic_range": ["the whole earth", "specific land/country", "ground/soil", "inhabited world"],
                "morphology": "feminine singular absolute with definite article",
                "usage_notes": "Can refer to physical earth or specific territories"
            }
        };

        // Greek lexicon data
        this.greekLexicon = {
            "G1722": {
                "strong_number": "G1722",
                "word": "ἐν",
                "transliteration": "en",
                "pronunciation": "en",
                "definition": "in, on, among, with",
                "part_of_speech": "preposition", 
                "root": "primary preposition",
                "semantic_range": ["locative: in, within", "temporal: during", "instrumental: by means of", "causal: because of"],
                "morphology": "preposition governing dative case",
                "usage_notes": "Most common preposition in NT; very flexible in meaning based on context"
            },
            "G746": {
                "strong_number": "G746",
                "word": "ἀρχή",
                "transliteration": "arche", 
                "pronunciation": "ar-khay'",
                "definition": "beginning, origin, rule",
                "part_of_speech": "noun feminine",
                "root": "ἄρχω (archo)",
                "semantic_range": ["beginning in time", "origin/source", "rule/authority", "ruler/magistrate"],
                "morphology": "feminine singular dative",
                "usage_notes": "Can denote temporal beginning or position of authority"
            },
            "G1510": {
                "strong_number": "G1510", 
                "word": "ἦν",
                "transliteration": "en",
                "pronunciation": "ane",
                "definition": "was, were (to be)",
                "part_of_speech": "verb",
                "root": "εἰμί (eimi)",
                "semantic_range": ["to exist", "to be present", "continuous state", "copulative function"],
                "morphology": "imperfect active indicative 3rd singular",
                "usage_notes": "Imperfect tense indicates continuous existence in past time"
            },
            "G3588": {
                "strong_number": "G3588",
                "word": "ὁ",
                "transliteration": "ho", 
                "pronunciation": "ho",
                "definition": "the (definite article)",
                "part_of_speech": "article",
                "root": "definite article",
                "semantic_range": ["the", "this", "that"],
                "morphology": "masculine singular nominative",
                "usage_notes": "Definite article; can also function as relative pronoun"
            },
            "G3056": {
                "strong_number": "G3056",
                "word": "λόγος",
                "transliteration": "logos",
                "pronunciation": "log'-os", 
                "definition": "word, reason, account",
                "part_of_speech": "noun masculine",
                "root": "λέγω (lego)",
                "semantic_range": ["word/speech", "doctrine/teaching", "divine Word (Christ)", "reason/logic"],
                "morphology": "masculine singular nominative",
                "usage_notes": "Theologically significant as title for Christ; rich philosophical background"
            },
            "G2316": {
                "strong_number": "G2316",
                "word": "θεός", 
                "transliteration": "theos",
                "pronunciation": "theh'-os",
                "definition": "God, god, divine being",
                "part_of_speech": "noun masculine",
                "root": "uncertain etymology",
                "semantic_range": ["the one true God", "false gods", "divine beings", "objects of worship"],
                "morphology": "masculine singular accusative",
                "usage_notes": "When referring to true God, often used with definite article; here anarthrous"
            }
        };

        // Sample verses data
        this.sampleVerses = {
            "genesis_1_1": {
                "reference": "Genesis 1:1",
                "language": "Hebrew",
                "original_text": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
                "transliteration": "bereshit bara elohim et hashamayim ve'et ha'arets",
                "translation": "In the beginning God created the heavens and the earth",
                "word_analysis": [
                    {
                        "position": 1,
                        "original": "בְּרֵאשִׁית",
                        "transliteration": "bereshit", 
                        "strong_number": "H7225",
                        "english": "beginning",
                        "parsing": "Preposition + noun feminine singular construct",
                        "semantic_notes": "Temporal phrase indicating the commencement of creation"
                    },
                    {
                        "position": 2,
                        "original": "בָּרָא",
                        "transliteration": "bara",
                        "strong_number": "H1254", 
                        "english": "created",
                        "parsing": "Qal perfect 3rd masculine singular",
                        "semantic_notes": "Divine creative activity; often used exclusively of God's work"
                    },
                    {
                        "position": 3,
                        "original": "אֱלֹהִים",
                        "transliteration": "elohim",
                        "strong_number": "H430",
                        "english": "God", 
                        "parsing": "Noun masculine plural absolute",
                        "semantic_notes": "Though plural in form, refers to one God; takes singular verb"
                    },
                    {
                        "position": 4,
                        "original": "אֵת",
                        "transliteration": "et",
                        "strong_number": "H853",
                        "english": "[obj]",
                        "parsing": "Particle - direct object marker", 
                        "semantic_notes": "Untranslatable particle marking definite direct object"
                    },
                    {
                        "position": 5,
                        "original": "הַשָּׁמַיִם",
                        "transliteration": "hashamayim",
                        "strong_number": "H8064",
                        "english": "the heavens",
                        "parsing": "Definite article + noun masculine plural",
                        "semantic_notes": "The celestial realm; atmospheric and celestial heavens"
                    },
                    {
                        "position": 6,
                        "original": "וְאֵת", 
                        "transliteration": "ve'et",
                        "strong_number": "H853",
                        "english": "and [obj]",
                        "parsing": "Conjunction + particle",
                        "semantic_notes": "Coordinating conjunction plus direct object marker"
                    },
                    {
                        "position": 7,
                        "original": "הָאָרֶץ",
                        "transliteration": "ha'arets",
                        "strong_number": "H776",
                        "english": "the earth",
                        "parsing": "Definite article + noun feminine singular", 
                        "semantic_notes": "The terrestrial realm; physical earth contrasted with heavens"
                    }
                ],
                "syntactic_analysis": {
                    "sentence_type": "Simple declarative statement",
                    "word_order": "Verb-Subject-Object (VSO) with temporal adverbial",
                    "clause_structure": "Main clause with compound direct object",
                    "grammatical_relations": [
                        "בְּרֵאשִׁית - Temporal adverbial phrase",
                        "אֱלֹהִים - Subject of main verb",
                        "בָּרָא - Main verb (transitive)", 
                        "הַשָּׁמַיִם - First direct object",
                        "הָאָרֶץ - Second direct object (coordinated)"
                    ],
                    "semantic_structure": "Agent-Action-Patient expressing divine creative activity over cosmic totality"
                }
            },
            "john_1_1": {
                "reference": "John 1:1", 
                "language": "Greek",
                "original_text": "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος",
                "transliteration": "En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos",
                "translation": "In the beginning was the Word, and the Word was with God, and the Word was God",
                "word_analysis": [
                    {
                        "position": 1,
                        "original": "Ἐν",
                        "transliteration": "En", 
                        "strong_number": "G1722",
                        "english": "In",
                        "parsing": "Preposition governing dative",
                        "semantic_notes": "Temporal preposition indicating time reference"
                    },
                    {
                        "position": 2,
                        "original": "ἀρχῇ",
                        "transliteration": "arche",
                        "strong_number": "G746",
                        "english": "beginning",
                        "parsing": "Noun feminine singular dative", 
                        "semantic_notes": "Temporal beginning; echoes Genesis 1:1"
                    },
                    {
                        "position": 3,
                        "original": "ἦν",
                        "transliteration": "en",
                        "strong_number": "G1510",
                        "english": "was",
                        "parsing": "Imperfect active indicative 3rd singular",
                        "semantic_notes": "Continuous existence; implies pre-existence"
                    },
                    {
                        "position": 4,
                        "original": "ὁ", 
                        "transliteration": "ho",
                        "strong_number": "G3588",
                        "english": "the",
                        "parsing": "Definite article masculine singular nominative",
                        "semantic_notes": "Definite article emphasizing specific identity"
                    },
                    {
                        "position": 5,
                        "original": "λόγος",
                        "transliteration": "logos",
                        "strong_number": "G3056",
                        "english": "Word",
                        "parsing": "Noun masculine singular nominative", 
                        "semantic_notes": "Divine Word; theologically refers to Christ as eternal Word of God"
                    }
                ],
                "syntactic_analysis": {
                    "sentence_type": "Complex sentence with three coordinate clauses",
                    "word_order": "Predicate-Subject structure in each clause",
                    "clause_structure": "Three parallel statements connected by καί (and)",
                    "grammatical_relations": [
                        "Clause 1: Ἐν ἀρχῇ (temporal phrase), ὁ λόγος (subject), ἦν (copulative verb)",
                        "Clause 2: ὁ λόγος (subject), ἦν (copulative verb), πρὸς τὸν θεόν (prepositional phrase)", 
                        "Clause 3: θεὸς (predicate nominative), ἦν (copulative verb), ὁ λόγος (subject)"
                    ],
                    "semantic_structure": "Three progressive statements about eternal existence, divine relationship, and divine nature of the Word"
                }
            }
        };

        // Grammatical terms
        this.grammaticalTerms = {
            "hebrew": {
                "Qal": "Simple active stem in Hebrew verb system",
                "Perfect": "Completed action aspect", 
                "Construct": "Bound form of noun in genitive relationship",
                "Absolute": "Independent form of noun",
                "Definite article": "Hebrew הַ (ha-) marking definiteness"
            },
            "greek": {
                "Imperfect": "Past tense indicating ongoing or repeated action",
                "Dative": "Case expressing indirect object, location, or means",
                "Nominative": "Subject case",
                "Accusative": "Direct object case",
                "Anarthrous": "Without the definite article"
            }
        };
    }

    bindEvents() {
        // Verse selection
        document.getElementById('verse-select').addEventListener('change', (e) => {
            if (e.target.value) {
                this.loadVerse(e.target.value);
            }
        });

        // Language selection
        document.getElementById('language-select').addEventListener('change', (e) => {
            this.updateLanguageOptions(e.target.value);
        });

        // Analyze button
        document.getElementById('analyze-btn').addEventListener('click', () => {
            this.analyzeCustomText();
        });
    }

    updateLanguageOptions(language) {
        const verseSelect = document.getElementById('verse-select');
        verseSelect.innerHTML = '<option value="">Select a sample verse...</option>';
        
        if (language === 'hebrew') {
            verseSelect.innerHTML += '<option value="genesis_1_1">Genesis 1:1 (Hebrew)</option>';
        } else if (language === 'greek') {
            verseSelect.innerHTML += '<option value="john_1_1">John 1:1 (Greek)</option>';
        }
    }

    loadVerse(verseKey) {
        this.currentVerse = this.sampleVerses[verseKey];
        this.renderVerse();
        this.renderSentenceAnalysis();
        this.clearWordDetail();
    }

    analyzeCustomText() {
        const customInput = document.getElementById('custom-input').value.trim();
        if (!customInput) {
            alert('Please enter some text to analyze.');
            return;
        }
        
        // For demo purposes, show a message about custom analysis
        alert('Custom text analysis feature would be implemented with a full biblical text database. For now, please use the sample verses provided.');
    }

    renderVerse() {
        if (!this.currentVerse) return;

        const verseDisplay = document.getElementById('verse-display');
        
        const header = `
            <div class="verse-header">
                <div class="verse-reference">${this.currentVerse.reference}</div>
                <div class="verse-language">${this.currentVerse.language}</div>
            </div>
        `;

        const interlinear = this.currentVerse.word_analysis.map((word, index) => `
            <div class="word-group" data-word-index="${index}">
                <span class="original-text">${word.original}</span>
                <span class="transliteration">${word.transliteration}</span>
                <span class="english-gloss">${word.english}</span>
            </div>
        `).join('');

        const translation = `
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-border); text-align: center;">
                <strong>Translation:</strong> ${this.currentVerse.translation}
            </div>
        `;

        verseDisplay.innerHTML = header + '<div class="interlinear">' + interlinear + '</div>' + translation;

        // Bind word click events
        this.bindWordEvents();
    }

    bindWordEvents() {
        const wordGroups = document.querySelectorAll('.word-group');
        wordGroups.forEach(wordGroup => {
            wordGroup.addEventListener('click', (e) => {
                // Remove active class from all words
                wordGroups.forEach(wg => wg.classList.remove('active'));
                
                // Add active class to clicked word
                wordGroup.classList.add('active');
                
                // Show word detail
                const wordIndex = parseInt(wordGroup.dataset.wordIndex);
                this.showWordDetail(wordIndex);
            });
        });
    }

    showWordDetail(wordIndex) {
        const word = this.currentVerse.word_analysis[wordIndex];
        const lexicon = this.currentVerse.language === 'Hebrew' ? this.hebrewLexicon : this.greekLexicon;
        const lexiconEntry = lexicon[word.strong_number];

        if (!lexiconEntry) return;

        const wordDetail = document.getElementById('word-detail');
        const placeholder = wordDetail.querySelector('.word-detail__placeholder');
        let content = wordDetail.querySelector('.word-detail__content');

        if (placeholder) placeholder.style.display = 'none';
        
        if (!content) {
            content = document.createElement('div');
            content.className = 'word-detail__content';
            wordDetail.appendChild(content);
        }

        content.style.display = 'block';
        content.innerHTML = `
            <div class="word-info">
                <h4>${lexiconEntry.word}</h4>
                <div class="strong-number">${lexiconEntry.strong_number}</div>
                <p><strong>Transliteration:</strong> ${lexiconEntry.transliteration}</p>
                <p><strong>Pronunciation:</strong> ${lexiconEntry.pronunciation}</p>
                <p><strong>Definition:</strong> ${lexiconEntry.definition}</p>
            </div>

            <div class="word-info">
                <h4>Morphological Analysis</h4>
                <div class="morphology-grid">
                    <div class="morphology-item">
                        <div class="morphology-label">Part of Speech:</div>
                        <div>${lexiconEntry.part_of_speech}</div>
                    </div>
                    <div class="morphology-item">
                        <div class="morphology-label">Parsing:</div>
                        <div>${word.parsing}</div>
                    </div>
                </div>
                <p><strong>Root:</strong> ${lexiconEntry.root}</p>
            </div>

            <div class="word-info">
                <h4>Semantic Range</h4>
                <ul class="semantic-range">
                    ${lexiconEntry.semantic_range.map(meaning => `<li>${meaning}</li>`).join('')}
                </ul>
            </div>

            <div class="word-info">
                <h4>Usage Notes</h4>
                <p>${lexiconEntry.usage_notes}</p>
                <p><strong>Context:</strong> ${word.semantic_notes}</p>
            </div>
        `;
    }

    renderSentenceAnalysis() {
        if (!this.currentVerse) return;

        const sentenceAnalysis = document.getElementById('sentence-analysis');
        const analysis = this.currentVerse.syntactic_analysis;

        sentenceAnalysis.innerHTML = `
            <h3>Sentence-Level Analysis</h3>
            
            <div class="syntax-section">
                <h4>Syntactic Structure</h4>
                <p><strong>Sentence Type:</strong> ${analysis.sentence_type}</p>
                <p><strong>Word Order:</strong> ${analysis.word_order}</p>
                <p><strong>Clause Structure:</strong> ${analysis.clause_structure}</p>
            </div>

            <div class="syntax-section">
                <h4>Grammatical Relations</h4>
                <ul class="grammatical-relations">
                    ${analysis.grammatical_relations.map(relation => `<li>${relation}</li>`).join('')}
                </ul>
            </div>

            <div class="syntax-section">
                <h4>Semantic Analysis</h4>
                <p>${analysis.semantic_structure}</p>
            </div>
        `;
    }

    clearWordDetail() {
        const wordDetail = document.getElementById('word-detail');
        const placeholder = wordDetail.querySelector('.word-detail__placeholder');
        const content = wordDetail.querySelector('.word-detail__content');

        if (placeholder) placeholder.style.display = 'block';
        if (content) content.style.display = 'none';
    }

    populateGlossary() {
        const hebrewTermsList = document.getElementById('hebrew-terms');
        const greekTermsList = document.getElementById('greek-terms');

        // Populate Hebrew terms
        Object.entries(this.grammaticalTerms.hebrew).forEach(([term, definition]) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="glossary-term">${term}:</span> ${definition}`;
            hebrewTermsList.appendChild(li);
        });

        // Populate Greek terms
        Object.entries(this.grammaticalTerms.greek).forEach(([term, definition]) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="glossary-term">${term}:</span> ${definition}`;
            greekTermsList.appendChild(li);
        });
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BiblicalAnalysisTool();
});