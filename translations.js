const translations = {
    en: {
        nav: {
            home: "Home",
            personalized: "Personalized Plan",
            herbs: "Herbal Guide",
            knowledge: "Health Knowledge",
            tracking: "Health Tracking"
        },
        home: {
            videos: {
                title: "Featured Videos",
                video1: {
                    title: "Health Exercise 'Eight Brocades'",
                    desc: "Eight Brocades is an ancient Chinese exercise method consisting of eight movements, including physical exercises and breathing techniques."
                },
                video2: {
                    title: "Medicinal Pork Rib Soup",
                    desc: "Learn how to make traditional Chinese medicinal soup at home"
                },
                video3: {
                    title: "Mushroom Medicinal Soup",
                    desc: "Traditional health-preserving soup recipe for body conditioning"
                },
                watchVideo: "Watch Full Video"
            },
            articles: {
                title: "Health Articles",
                readMore: "Read More"
            }
        },
        personalized: {
            title: "Personalized Health Plan",
            form: {
                age: {
                    label: "Age",
                    placeholder: "Select age range",
                    options: {
                        "18-25": "18-25 years",
                        "26-35": "26-35 years",
                        "36-45": "36-45 years",
                        "46-55": "46-55 years",
                        "56-65": "56-65 years",
                        "65+": "65+ years"
                    }
                },
                gender: {
                    label: "Gender",
                    placeholder: "Select gender",
                    options: {
                        male: "Male",
                        female: "Female"
                    }
                },
                sleep: {
                    label: "Sleep Quality",
                    placeholder: "Select sleep quality",
                    options: {
                        good: "Good",
                        fair: "Fair",
                        poor: "Poor"
                    }
                },
                diet: {
                    label: "Dietary Habits",
                    placeholder: "Select dietary habits",
                    options: {
                        balanced: "Balanced Diet",
                        vegetarian: "Vegetarian",
                        meat: "Meat-based",
                        irregular: "Irregular Diet"
                    }
                },
                health: {
                    label: "Health Conditions (Hold Ctrl to select multiple)",
                    options: {
                        none: "No special issues",
                        hypertension: "Hypertension",
                        diabetes: "Diabetes",
                        insomnia: "Insomnia",
                        arthritis: "Joint Pain"
                    }
                },
                submit: "Generate Personalized Plan"
            }
        },
        articles: {
            herbs: {
                title: "How to Identify Authentic Ginseng",
                date: "Published: ",
                author: "Author: ",
                authorName: "TCM Herb Expert",
                sections: {
                    basics: {
                        title: "Basic Characteristics of Ginseng",
                        content: "Genuine ginseng has unique appearance and texture features. The main root is cylindrical or spindle-shaped, with distinct horizontal rings and rootlets, light yellow to light brown in color, with firm texture."
                    },
                    identification: {
                        title: "Key Identification Points",
                        features: {
                            shape: {
                                title: "Main Root Shape",
                                desc: "Cylindrical or spindle-shaped, thicker at the top and gradually tapering downward"
                            },
                            texture: {
                                title: "Horizontal Rings",
                                desc: "Clear and natural horizontal ring patterns on the surface"
                            },
                            root: {
                                title: "Rootlets",
                                desc: "Evenly distributed rootlets with smooth connection to the main root"
                            },
                            color: {
                                title: "Color",
                                desc: "Uniform light yellow to light brown surface"
                            }
                        }
                    },
                    quality: {
                        title: "Quality Testing",
                        points: [
                            "Hardness: Firm texture with flexibility, not easily broken",
                            "Cross-section: Fresh cross-section shows horny appearance with luster",
                            "Texture: Clear internal texture with regular vascular bundle arrangement"
                        ]
                    }
                }
            },
            medicinalSoup: {
                title: "Traditional Chinese Medicinal Soup Recipes",
                sections: {
                    intro: "Traditional Chinese medicinal soups combine the wisdom of TCM with culinary arts",
                    recipes: {
                        winterSoup: {
                            title: "Winter Warming Soup",
                            ingredients: "Ginger, Mutton, Chinese Angelica",
                            benefits: "Warms the body, nourishes blood"
                        },
                        springSoup: {
                            title: "Spring Detox Soup",
                            ingredients: "Mung Beans, Lotus Leaf, Chrysanthemum",
                            benefits: "Cleanses and refreshes the body"
                        }
                    }
                }
            },
            exercise: {
                title: "Traditional Chinese Exercises",
                sections: {
                    qigong: {
                        title: "Qigong Basics",
                        desc: "Ancient Chinese practice combining breathing, movement, and meditation"
                    },
                    taichi: {
                        title: "Tai Chi Fundamentals",
                        desc: "Gentle martial art focusing on balance and energy flow"
                    }
                }
            },
            list: {
                ginseng: {
                    tag: "Herbal Knowledge",
                    title: "How to Identify Authentic Ginseng",
                    desc: "Detailed guide with illustrations on how to identify genuine ginseng, learn key identification points to avoid counterfeit products...",
                    date: "2024-01-15"
                },
                goji: {
                    tag: "Herb Selection",
                    title: "Goji Berry Selection and Storage Guide",
                    desc: "Learn how to select quality goji berries, proper storage methods, and usage precautions...",
                    date: "2024-01-18"
                },
                taichi: {
                    tag: "Exercise",
                    title: "Tai Chi Basics: Fundamental Forms",
                    desc: "Detailed explanation of basic Tai Chi movements, learn traditional wellness exercise from scratch...",
                    date: "2024-01-22"
                },
                baduanjin: {
                    tag: "Exercise Method",
                    title: "Complete Guide to Eight Brocades",
                    desc: "Detailed instruction of the traditional wellness exercise Eight Brocades, including movement essentials and benefits...",
                    date: "2024-01-25"
                },
                herbs: {
                    tag: "TCM Basics",
                    title: "Common Chinese Herbs Guide",
                    desc: "Comprehensive guide to 50 common Chinese herbs, including appearance, aroma, and slice characteristics...",
                    date: "2024-01-28"
                },
                daoyin: {
                    tag: "Exercise Method",
                    title: "Daoyin Exercise Guide",
                    desc: "Traditional Chinese Daoyin exercise method explained, combining breathing techniques with movement...",
                    date: "2024-01-30"
                }
            }
        },
        healthTracking: {
            title: "Health Tracking",
            sections: {
                diet: {
                    title: "Diet Record",
                    prompt: "Select today's food intake:",
                    categories: {
                        grains: "Grains",
                        proteins: "Proteins",
                        vegetables: "Vegetables",
                        fruits: "Fruits",
                        snacks: "Snacks & Beverages"
                    }
                },
                water: {
                    title: "Water Intake",
                    prompt: "Each cup represents 250ml, click to record today's water intake:"
                },
                exercise: {
                    title: "Exercise Record",
                    prompt: "Select today's exercise and duration:",
                    types: {
                        walking: "Walking",
                        running: "Running",
                        yoga: "Yoga",
                        swimming: "Swimming",
                        cycling: "Cycling"
                    },
                    durations: {
                        15: "15 minutes",
                        30: "30 minutes",
                        45: "45 minutes",
                        60: "60 minutes"
                    }
                }
            },
            feedback: {
                title: "Today's Health Assessment",
                sections: {
                    diet: "Diet Analysis",
                    water: "Water Intake Analysis",
                    exercise: "Exercise Analysis",
                    overall: "Overall Recommendations"
                }
            }
        },
        healthKnowledge: {
            categories: {
                seasonal: {
                    title: "Seasonal Health",
                    articles: {
                        spring: "Spring Health Tips",
                        summer: "Summer Wellness Guide",
                        autumn: "Autumn Health Care",
                        winter: "Winter Health Maintenance"
                    }
                },
                nutrition: {
                    title: "Nutritional Guidance",
                    articles: {
                        basics: "Basic Nutrition Principles",
                        balance: "Balanced Diet Guide",
                        herbs: "Medicinal Herbs in Diet"
                    }
                },
                exercise: {
                    title: "Exercise & Movement",
                    articles: {
                        traditional: "Traditional Chinese Exercises",
                        modern: "Modern Fitness Integration",
                        breathing: "Breathing Techniques"
                    }
                }
            }
        },
        search: {
            placeholder: "Search...",
            tabs: {
                local: "Site Search",
                web: "Web Search"
            },
            noResults: "No results found",
            externalSearch: {
                title: "Search on external sites",
                tcm: "Search on TCM Network",
                wiki: "Search on Wikipedia",
                google: "Search on Google"
            }
        },
        pageTitles: {
            home: "Herbal Life - Health & Wellness",
            personalized: "Personalized Plan - Herbal Life",
            herbs: "Herbal Guide - Herbal Life",
            knowledge: "Health Knowledge - Herbal Life",
            tracking: "Health Tracking - Herbal Life"
        },
        common: {
            readMore: "Read More",
            watchVideo: "Watch Full Video",
            submit: "Submit",
            cancel: "Cancel",
            save: "Save",
            loading: "Loading...",
            success: "Success",
            error: "Error",
            back: "Back",
            next: "Next",
            finish: "Finish",
            videoTag: "Video Recommendation",
            articleTag: "Article",
            date: "Date: ",
            author: "Author: ",
            category: "Category: ",
            share: "Share",
            bookmark: "Bookmark"
        },
        errors: {
            required: "This field is required",
            invalid: "Invalid input",
            networkError: "Network error, please try again",
            loadingError: "Failed to load content",
            savingError: "Failed to save changes"
        },
        notifications: {
            saved: "Changes saved successfully",
            updated: "Content updated",
            deleted: "Content deleted",
            copied: "Copied to clipboard"
        }
    },
    zh: {
        nav: {
            home: "首页",
            personalized: "个性化方案",
            herbs: "药材宝典",
            knowledge: "养生知识",
            tracking: "健康跟踪"
        },
        home: {
            videos: {
                title: "精选视频",
                video1: {
                    title: "健康养生操《八段锦》",
                    desc: "八段锦是一种在中国古代发明的健身方法，由八种肢体动作组成，内容包括肢体运动和气息调理。"
                },
                video2: {
                    title: "药膳排骨汤",
                    desc: "药膳是中国传统的烹饪手法，教您掌握家庭版做法"
                },
                video3: {
                    title: "蘑菇药膳汤",
                    desc: "传统养生汤的做法，调理身体"
                },
                watchVideo: "观看完整视频"
            },
            articles: {
                title: "养生文章",
                readMore: "阅读全文"
            }
        },
        personalized: {
            title: "个性化养生方案定制",
            form: {
                age: {
                    label: "年龄",
                    placeholder: "请选择年龄段",
                    options: {
                        "18-25": "18-25岁",
                        "26-35": "26-35岁",
                        "36-45": "36-45岁",
                        "46-55": "46-55岁",
                        "56-65": "56-65岁",
                        "65+": "65岁以上"
                    }
                },
                gender: {
                    label: "性别",
                    placeholder: "请选择性别",
                    options: {
                        male: "男",
                        female: "女"
                    }
                },
                sleep: {
                    label: "睡眠质量",
                    placeholder: "请选择睡眠质量",
                    options: {
                        good: "良好",
                        fair: "一般",
                        poor: "较差"
                    }
                },
                diet: {
                    label: "饮食习惯",
                    placeholder: "请选择饮食习惯",
                    options: {
                        balanced: "均衡饮食",
                        vegetarian: "素食为主",
                        meat: "肉食为主",
                        irregular: "饮食不规律"
                    }
                },
                health: {
                    label: "健康状况（按Ctrl键可多选）",
                    options: {
                        none: "无特殊问题",
                        hypertension: "高血压",
                        diabetes: "糖尿病",
                        insomnia: "失眠",
                        arthritis: "关节疼痛"
                    }
                },
                submit: "生成个性化方案"
            }
        },
        articles: {
            herbs: {
                title: "人参的真伪鉴别方法",
                date: "发布日期：",
                author: "作者：",
                authorName: "中医药材专家",
                sections: {
                    basics: {
                        title: "人参的基本特征",
                        content: "正品人参具有独特的外观特征和质地，主根呈圆柱形或纺锤形，有明显的横环和支根，表面呈淡黄色或淡棕色，质地坚实。"
                    },
                    identification: {
                        title: "外观鉴别要点",
                        features: {
                            shape: {
                                title: "主根形状",
                                desc: "圆柱形或纺锤形，顶端较粗，向下渐细"
                            },
                            texture: {
                                title: "横纹",
                                desc: "表面有明显的横向环纹，纹路清晰自然"
                            },
                            root: {
                                title: "支根",
                                desc: "须根分布均匀，与主根连接处自然平滑"
                            },
                            color: {
                                title: "颜色",
                                desc: "表面呈均匀的淡黄色或淡棕色"
                            }
                        }
                    },
                    quality: {
                        title: "质地检验",
                        points: [
                            "硬度：质地坚实，有韧性，不易折断",
                            "断面：新鲜断面呈角质样，有光泽",
                            "纹理：内部纹理清晰，维管束排列规则"
                        ]
                    }
                }
            }
        }
    },
    ms: {
        // 马来语翻译...
    }
}; 