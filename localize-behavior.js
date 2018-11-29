import '../d2l-localize-behavior/d2l-localize-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.ButtonGroup = window.D2L.PolymerBehaviors.ButtonGroup || {};

/** @polymerBehavior D2L.PolymerBehaviors.ButtonGroup.LocalizeBehaviorImpl */
D2L.PolymerBehaviors.ButtonGroup.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return {
					'ar': {
						'moreActions': 'المزيد من الأفعال',
						'more': 'أكثر'
					},
					'en': {
						'moreActions': 'More Actions',
						'more': 'More'
					},
					'es': {
						'moreActions': 'Mas acciones',
						'more': 'Más'
					},
					'fi': {
						'moreActions': 'lisää toimintoja',
						'more': 'Lisää'
					},
					'fr': {
						'moreActions': 'Plus d\'actions',
						'more': 'Plus'
					},
					'ja': {
						'moreActions': 'その他のアクション',
						'more': 'もっと'
					},
					'ko': {
						'moreActions': '추가 작업',
						'more': '더'
					},
					'pt': {
						'moreActions': 'Mais ações',
						'more': 'Mais'
					},
					'sv': {
						'moreActions': 'fler åtgärder',
						'more': 'Mer'
					},
					'tr': {
						'moreActions': 'Daha fazla hareket',
						'more': 'Daha'
					},
					'zh': {
						'moreActions': '更多操作',
						'more': '更多'
					},
					'zh-tw': {
						'moreActions': '更多操作',
						'more': '更多'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.ButtonGroup.LocalizeBehavior */
D2L.PolymerBehaviors.ButtonGroup.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.ButtonGroup.LocalizeBehaviorImpl
];
