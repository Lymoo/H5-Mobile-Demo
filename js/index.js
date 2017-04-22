function loadingOver() {
	loading.style.display = "none", page1.style.display = "block"
}

function page2Show() {
	setTimeout(function() {
		page1.style.display = "none", courBox.style.animation = "page2Start 18.84s linear forwards", head1.style.animation = "head1 1.16s 0.2s infinite", head2.style.animation = "head2 0.96s 0.84s infinite", head3.style.animation = "head3 1s 2.04s infinite", head4.style.animation = "head4 0.32s 2.04s infinite", head5.style.animation = "head5 0.56s 3.32s infinite", ren1.style.animation = "turn 0s 2.6s forwards", ren3.style.animation = "turn 0s 0.8s forwards", dialog1.style.animation = "dialog1 4.56s ease-in-out 0.24s forwards", dialog2.style.animation = "dialog2 4.16s ease-in-out 0.8s forwards", dialog3.style.animation = "dialog3 3.76s ease-in-out 1.36s forwards", dialog4.style.animation = "dialog4 3.24s ease-in-out 2.04s forwards", dialog5.style.animation = "dialog5 2.68s ease-in-out 2.84s forwards", character_head1.style.animation = "characterHead1 0s 5.24s forwards", character_head2.style.animation = "characterHead2 1.36s 5.24s 10 forwards", character_think.style.animation = "characterThink 4.16s 11.62s forwards", hunter.style.animation = "hunterShow 1.9s 12.08s forwards", hunterHand.style.animation = "hunterHandMove 0.32s 12.28s infinite", poet.style.animation = "poetShow 1.9s 13.78s forwards", poetHead.style.animation = "poetHeadMove 1.16s 13.98s infinite", characterSay.style.animation = "characterSay 13.6s 5.24s 1", character.style.animation = "characterRun 0.7s 18.84s forwards", setTimeout(function() {
			shownew(), page3Show()
		}, 7500)
	}, 500)
}

function shownew() {
	return hwnewstr = characterSayText[newsi], txti >= hwnewstr.length ? (clearInterval(txttimer), clearInterval(newstimer), newsi++, newsi >= characterSayText.length ? (newsi = characterSayText.length - 1, void(characterSayContent.innerHTML = characterSayText[newsi])) : (newstimer = setInterval("shownew()", NewsTime), void(txti = 0))) : (clearInterval(txttimer), characterSayContent.innerHTML = hwnewstr.substring(0, txti + 1), txti++, void(txttimer = setInterval("shownew()", TextTime)))
}

function page3Show() {
	setTimeout(function() {
		page2.style.display = "none", page3.style.display = "block", eunuch.className = "eunuch eunuchBegin", eunuchBody.className = "eunuchBody2 eunuch_walkRight", setTimeout(function() {
			eunuch.className = "eunuch", eunuchBody.className = "eunuchBody", move()
		}, 3e3)
	}, 12e3)
}

function page4Show() {
	setTimeout(function() {
		yongzhengTalk.className = "yongzhengTalk dialogRight talkStart", setTimeout(function() {
			yongzhengTalkText.innerHTML = "", typeTimer = setInterval(function() {
				yongzhengTalkText.innerHTML = page4_talk[0].substring(0, typeIndex + 1), typeIndex++, typeIndex >= page4_talk[0].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
					yongzhengTalkText.innerHTML = "", typeTimer = setInterval(function() {
						yongzhengTalkText.innerHTML = page4_talk[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= page4_talk[1].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
							yongzhengTalkText.innerHTML = "", yongzhengTalk.className = "yongzhengTalk dialogRight talkEnd", peopleTalk()
						}, 1800))
					}, 80)
				}, 1800))
			}, 80)
		}, 1800)
	}, 1500)
}

function peopleTalk() {
	page4_head3.className = "head3 head3Active", talk1.className = "talk1 dialogRight2 talkStart", setTimeout(function() {
		page4_head2.className = "head2 head2Active", talk2.className = "talk2 dialogLeft talkStart", setTimeout(function() {
			page4_head1.className = "head1_2 head1Active", talk3.className = "talk3 dialogLeft talkStart", talk1.className = "talk1 dialogRight2 talkEnd", setTimeout(function() {
				talk2.className = "talk2 dialogLeft talkEnd", yongzhengTalkFn(), setTimeout(function() {
					talk3.className = "talk3 dialogLeft talkEnd"
				}, 1500)
			}, 1500)
		}, 1500)
	}, 1500)
}

function yongzhengTalkFn() {
	typeTimer = setInterval(function() {
		yongzhengTalkText.innerHTML = page4_talk[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= page4_talk[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
			yongzhengTalkText.innerHTML = "", typeTimer = setInterval(function() {
				yongzhengTalkText.innerHTML = page4_talk[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= page4_talk[3].length && setTimeout(function() {
					yongzhengTalk.className = "yongzhengTalk dialogRight talkEnd", talk4.className = "talk4 dialogRight talkStart", setTimeout(function() {
						page5Show()
					}, 1e3)
				}, 1800)
			}, 80)
		}, 1800))
	}, 80), yongzhengTalk.className = "yongzhengTalk dialogRight talkStart"
}

function page5Show() {
	page5.style.display = "block", door2Left.className = "closeDoorLeft", door2Right.className = "closeDoorRight", setTimeout(function() {
		shengzhi.className = "shengzhi shengzhiShow", juanzhou2.className = "juanzhou2 juanzhou2Show", doorMo.className = "doorMo doorMoShow", setTimeout(function() {
			juanzhou.style.opacity = 1, juanzhou2.style.opacity = 1, join.className = "join joinShow", setTimeout(function() {
				chuanzhi.className = "chuanzhi chuanzhiShow", restart.className = "restart restartShow", wyLogo.className = "wyLogo wyLogoShow", chuanzhiBtn(), restartBtn()
			}, 500)
		}, 1e3)
	}, 1e3)
}

function dialogAni(e, n) {
	e.onclick = function() {
		n.className = "dialog dialogRight dialogStart", setTimeout(function() {
			n.className = "dialog dialogRight dialogEnd"
		}, 2e3)
	}
}

function chuanzhiBtn() {
	chuanzhi.onclick = function() {
		page6.style.display = "block"
	}, share.onclick = function() {
		page6.style.display = "block"
	}
}

function restartBtn() {
	restart.onclick = function() {
		window.location.reload()
	}
}

function move() {
	var e = !1,
		n = !1,
		t = null;
	left_btn.addEventListener("touchstart", function(n) {
		n.preventDefault(), left_btn.style.animation = "btnActive .2s forwards", e = !0, mountainX >= -430 && (mountainX = -430, cloudX = -18, buildingX = -6), t = setInterval(function() {
			e && (mountainX >= -430 && (mountainX = -430, cloudX = -18, buildingX = -6), buildingX >= -582 && (remindLeft.style.display = "none"), buildingX >= -740 && -700 >= buildingX && (eunuchTop -= bridgeTop, eunuch.style.top = eunuchTop + "%"), buildingX >= -700 && -660 >= buildingX && (eunuchTop += bridgeTop, eunuch.style.top = eunuchTop + "%"), thlFollow && (tanghulu.style.position = "fixed", tanghulu.style.left = "60.5%", tanghulu.style.width = "18%", tanghulu.style.transform = "rotateY(0deg)", haveDaTie.style.transform = "rotateY(0deg)", haveCiqi.style.transform = "rotateY(0deg)", tanghuluBody.className = "tanghulu_walkLeft"), mountain.style.left = mountainX++ + "%", cloud.style.left = cloudX++ + "%", building.style.left = buildingX++ + "%", eunuchBody.className = "eunuch_walkLeft eunuchLeft")
		}, 40)
	}), left_btn.addEventListener("touchend", function(n) {
		n.preventDefault(), e = !1, clearInterval(t), left_btn.style.animation = "null", tanghuluBody.className = "tanghuluBody", eunuchBody.className = "eunuchBodyLeft eunuchLeft"
	}), right_btn.addEventListener("touchstart", function(e) {
		e.preventDefault(), right_btn.style.animation = "btnActive .2s forwards", n = !0, -800 >= buildingX && (mountainX = -793, cloudX = -466, buildingX = -800), t = setInterval(function() {
			n && (-800 >= buildingX && (mountainX = -793, cloudX = -466, buildingX = -800, remindRight.style.display = "none"), -660 >= buildingX && buildingX >= -700 && (eunuchTop -= bridgeTop, eunuch.style.top = eunuchTop + "%"), -700 >= buildingX && buildingX >= -740 && (eunuchTop += bridgeTop, eunuch.style.top = eunuchTop + "%"), goon || -95 >= buildingX && (buildingX = -95, mountainX = -524, cloudX = -112, firstStroy(), mountain.style.left = mountainX-- + "%", cloud.style.left = cloudX-- + "%", building.style.left = buildingX-- + "%", eunuchBody.className = "eunuch_walkRight eunuchRight"), thlFollow && (tanghulu.style.position = "fixed", tanghulu.style.left = "20.5%", tanghulu.style.width = "18%", tanghulu.style.transform = "rotateY(180deg)", haveDaTie.style.transform = "rotateY(180deg)", haveCiqi.style.transform = "rotateY(180deg)", tanghuluBody.className = "tanghulu_walkRight", -604 >= buildingX && (buildingX = -604, cloudX = -621, mountainX = -1033)), mountain.style.left = mountainX-- + "%", cloud.style.left = cloudX-- + "%", building.style.left = buildingX-- + "%", eunuchBody.className = "eunuch_walkRight eunuchRight")
		}, 40)
	}), right_btn.addEventListener("touchend", function(e) {
		e.preventDefault(), n = !1, right_btn.style.animation = "null", eunuchBody.className = "eunuchBody eunuchRight", tanghuluBody.className = "tanghuluBody", clearInterval(t)
	})
}

function firstStroy() {
	firstPoint && (eunuch_dialog.className = "dialog dialogRight dialogStart", setTimeout(function() {
		eunuch_dialog.className = "dialog dialogRight dialogEnd", tanghulu.onclick = function() {
			talkBox.style.display = "block", eunuchTalk.style.display = "block", setTimeout(function() {
				eunuchTalk.style.display = "none", eunuchFace.className = "eunuchFaceStyle eunuchFace2", tjText.innerHTML = "", tanghuluTalk.style.display = "block", typeTimer = setInterval(function() {
					thlText.innerHTML = firstTalk[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= firstTalk[1].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						thlText.innerHTML = "", tanghuluTalk.style.display = "none", eunuchTalk.style.display = "block", typeTimer = setInterval(function() {
							tjText.innerHTML = firstTalk[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= firstTalk[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
								tjText.innerHTML = "", typeTimer = setInterval(function() {
									tjText.innerHTML = firstTalk[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= firstTalk[3].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
										tanghuluTalk.style.display = "block", eunuchTalk.style.display = "none", eunuchFace.className = "eunuchFaceStyle eunuchFace3", typeTimer = setInterval(function() {
											thlText.innerHTML = firstTalk[4].substring(0, typeIndex + 1), typeIndex++, typeIndex >= firstTalk[4].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
												thlText.innerHTML = "", typeTimer = setInterval(function() {
													thlText.innerHTML = firstTalk[5].substring(0, typeIndex + 1), typeIndex++, typeIndex >= firstTalk[5].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
														thlText.innerHTML = "", tanghuluTalk.style.display = "none", eunuchTalk.style.display = "block", tjText.innerHTML = "谢~~", setTimeout(function() {
															tanghulu.onclick = null, thlFollow = !0, tanghulu.style.position = "fixed", tanghulu.style.left = "20.5%", tanghulu.style.width = "18%", tanghulu.style.transform = "rotateY(180deg)", yu.style.display = "none", yushining.style.display = "none", haveDaTie.style.transform = "rotateY(180deg)", haveCiqi.style.transform = "rotateY(0deg)", talkBox.style.display = "none", goon = !0, secondPoint = !0, datieStory = !0, ciqiStroy = !0, thlRemind.style.display = "none", dtRemind.style.display = "block", cqRemind.style.display = "block", yzRemind.style.display = "block", secondStory()
														}, 1500)
													}, 1800))
												}, 80)
											}, 1800))
										}, 80)
									}, 1800))
								}, 80)
							}, 1800))
						}, 80)
					}, 1800))
				}, 80)
			}, 1800)
		}
	}, 1800)), firstPoint = !1
}

function secondStory() {
	secondPoint && (datieStory = !1, ciqiStroy = !1, datie.onclick = function() {
		talkBox.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace4", eunuchTalk.style.display = "block", tjText.innerHTML = secondTalk[0], setTimeout(function() {
			tjText.innerHTML = "", eunuchTalk.style.display = "none", datieTalk.style.display = "block", typeTimer = setInterval(function() {
				datieText.innerHTML = secondTalk[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk[1].length && (clearInterval(typeTimer), typeIndex = 0, datieQuestion())
			}, 80)
		}, 1800)
	}, ciqi.onclick = function() {
		talkBox.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace1", eunuchTalk.style.display = "block", tjText.innerHTML = secondTalk2[0], ciqiText.innerHTML = "", setTimeout(function() {
			tjText.innerHTML = "", eunuchTalk.style.display = "none", ciqiTalk.style.display = "block", typeTimer = setInterval(function() {
				ciqiText.innerHTML = secondTalk2[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk[1].length && (clearInterval(typeTimer), typeIndex = 0, ciqiQuestion())
			}, 80)
		}, 1800)
	}), secondPoint = !1
}

function datieQuestion() {
	setTimeout(function() {
		datieText.innerHTML = "", questionBox.style.display = "block", questionBox.className = "questionBoxShow", lBtn.className = "", rBtn.className = "", dtQuestion.style.display = "block", lBtn.onclick = function() {
			canClick_lBtn && (canClick_lBtn = !1, lBtn.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					datieText.innerHTML = secondTalk[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						datieQuestion()
					}, 500))
				}, 80)
			}, 600))
		}, rBtn.onclick = function() {
			canClick_rBtn && (canClick_rBtn = !1, rBtn.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					datieText.innerHTML = secondTalk[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk[3].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						datieText.innerHTML = "", dtQuestion.style.display = "none", questionBox.style.display = "block", questionBox.className = "questionBoxShow", getGoods1.style.display = "block", getBtn.onclick = function() {
							canCllck_gBtn && (canCllck_gBtn = !1, getBtn.className = "answerActive", questionBox.className = "questionBoxEnd", talkBox.style.display = "none", setTimeout(function() {
								datieTalk.style.display = "none", getGoods1.style.display = "none", haveDaTie.style.opacity = 1, haveDaTie.style.animation = "haveGoods1 2.08s forwards", dtRemind.style.display = "none", datieStory = !0, datieStory && ciqiStroy && setTimeout(function() {
									tanghuluFinish()
								}, 1e3), datie.onclick = function() {
									datie_dialog.className = "dialog dialogRight dialogStart", setTimeout(function() {
										datie_dialog.className = "dialog dialogRight dialogEnd"
									}, 2e3)
								}
							}, 600))
						}
					}, 1e3))
				}, 80)
			}, 600))
		}
	}, 1800)
}

function ciqiQuestion() {
	setTimeout(function() {
		ciqiText.innerHTML = "", questionBox.style.display = "block", questionBox.className = "questionBoxShow", lBtn2.className = "", rBtn2.className = "", cqQuestion.style.display = "block", lBtn2.onclick = function() {
			canClick_lBtn2 && (canClick_lBtn2 = !1, lBtn2.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					ciqiText.innerHTML = secondTalk2[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk2[3].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						ciqiText.innerHTML = "", cqQuestion.style.display = "none", questionBox.style.display = "block", questionBox.className = "questionBoxShow", getGoods2.style.display = "block", getBtn2.onclick = function() {
							canCllck_gBtn2 && (canCllck_gBtn2 = !1, getBtn2.className = "answerActive", questionBox.className = "questionBoxEnd", talkBox.style.display = "none", ciqiTalk.style.display = "none", setTimeout(function() {
								getGoods2.style.display = "none", haveCiqi.style.opacity = 1, haveCiqi.style.animation = "haveGoods1 2.08s forwards", cqRemind.style.display = "none", ciqiStroy = !0, datieStory && ciqiStroy && setTimeout(function() {
									tanghuluFinish()
								}, 1e3), ciqi.onclick = function() {
									ciqi_dialog.className = "dialog dialogRight dialogStart", setTimeout(function() {
										ciqi_dialog.className = "dialog dialogRight dialogEnd"
									}, 2e3)
								}
							}, 600))
						}
					}, 1e3))
				}, 80)
			}, 600))
		}, rBtn2.onclick = function() {
			canClick_rBtn2 && (canClick_rBtn2 = !1, rBtn2.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					ciqiText.innerHTML = secondTalk2[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk2[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						ciqiQuestion()
					}, 500))
				}, 80)
			}, 600))
		}
	}, 1800)
}

function tanghuluFinish() {
	talkBox.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace5", eunuchTalk.style.display = "block", tjText.innerHTML = secondTalk3[0], setTimeout(function() {
		tjText.innerHTML = "", eunuchTalk.style.display = "none", tanghuluTalk.style.display = "block", typeTimer = setInterval(function() {
			thlText.innerHTML = secondTalk3[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= secondTalk3[1].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
				thlText.innerHTML = "", questionBox.style.display = "block", questionBox.className = "questionBoxShow", getGoods3.style.display = "block", getGoods3.onclick = function() {
					canCllck_gBtn3 && (canCllck_gBtn3 = !1, getBtn3.className = "answerActive", questionBox.className = "questionBoxEnd", thlFollow = !1, talkBox.style.display = "none", tanghuluTalk.style.display = "none", setTimeout(function() {
						getGoods3.style.display = "none", haveYu.style.opacity = 1, haveYu.style.animation = "haveGoods1 2.08s forwards", tanghulu.style.display = "none", remindRight.style.display = "block", thirdPoint = !0, thirdStroy()
					}, 600))
				}
			}, 1800))
		}, 80)
	}, 1800)
}

function thirdStroy() {
	thirdPoint && (yongzheng.onclick = function() {
		talkBox.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace1", eunuchTalk.style.display = "block", tjText.innerHTML = thirdTalk[0], setTimeout(function() {
			tjText.innerHTML = "", typeTimer = setInterval(function() {
				tjText.innerHTML = thirdTalk[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[1].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
					tjText.innerHTML = "", typeTimer = setInterval(function() {
						tjText.innerHTML = thirdTalk[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
							tjText.innerHTML = "", eunuchTalk.style.display = "none", yzTalk.style.display = "block", typeTimer = setInterval(function() {
								yzText.innerHTML = thirdTalk[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[3].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
									yzText.innerHTML = "", yzTalk.style.display = "none", eunuchFace.className = "eunuchFaceStyle eunuchFace3", eunuchTalk.style.display = "block", typeTimer = setInterval(function() {
										tjText.innerHTML = thirdTalk[4].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[4].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
											tjText.innerHTML = "", eunuchTalk.style.display = "none", yzTalk.style.display = "block", typeTimer = setInterval(function() {
												yzText.innerHTML = thirdTalk[5].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[5].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
													yzText.innerHTML = "", yzTalk.style.display = "none", eunuchTalk.style.display = "block", typeTimer = setInterval(function() {
														tjText.innerHTML = thirdTalk[6].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[6].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
															tjText.innerHTML = "", eunuchTalk.style.display = "none", yzTalk.style.display = "block", typeTimer = setInterval(function() {
																yzText.innerHTML = thirdTalk[7].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[7].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
																	yzText.innerHTML = "", typeTimer = setInterval(function() {
																		yzText.innerHTML = thirdTalk[8].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[8].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
																			yzText.innerHTML = "", eunuchTalk.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace6", yzTalk.style.display = "none", typeTimer = setInterval(function() {
																				tjText.innerHTML = thirdTalk[9].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk[9].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
																					tjText.innerHTML = "", eunuchTalk.style.display = "none", talkBox.style.display = "none", crow.style.animation = "crowMove 1.5s linear forwards", remindRight.style.display = "none", remindLeft.style.display = "block", yzRemind.style.display = "none", bmhRemind.style.display = "block", yongzheng.onclick = function() {
																						yongzheng_dialog.className = "dialog dialogRight dialogStart", setTimeout(function() {
																							yongzheng_dialog.className = "dialog dialogRight dialogEnd"
																						}, 2e3)
																					}, baomihua.onclick = function() {
																						bmhText.innerHTML = "", talkBox.style.display = "block", eunuchFace.className = "eunuchFaceStyle eunuchFace7", eunuchTalk.style.display = "block", tjText.innerHTML = thirdTalk2[0], setTimeout(function() {
																							tjText.innerHTML = "", eunuchTalk.style.display = "none", bmhTalk.style.display = "block", typeTimer = setInterval(function() {
																								bmhText.innerHTML = thirdTalk2[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk2[1].length && (clearInterval(typeTimer), typeIndex = 0, baomihuaQuestion())
																							}, 80)
																						}, 1800)
																					}
																				}, 1800))
																			}, 80)
																		}, 1800))
																	}, 80)
																}, 1800))
															}, 80)
														}, 1800))
													}, 80)
												}, 1800))
											}, 80)
										}, 1800))
									}, 80)
								}, 1800))
							}, 80)
						}, 1800))
					}, 80)
				}, 1800))
			}, 80)
		}, 1800)
	}), thirdPoint = !1
}

function baomihuaQuestion() {
	setTimeout(function() {
		questionBox.style.display = "block", questionBox.className = "questionBoxShow", bmhQuestion.style.display = "block", lBtn3.className = "", rBtn3.className = "", lBtn3.onclick = function() {
			canClick_lBtn4 && (canClick_lBtn4 = !1, lBtn3.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					bmhText.innerHTML = thirdTalk2[3].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk2[3].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						baomihuaQuestion()
					}, 1e3))
				}, 80)
			}, 600))
		}, rBtn3.onclick = function() {
			canClick_rBtn4 && (canClick_rBtn4 = !1, rBtn3.className = "answerActive", questionBox.className = "questionBoxEnd", setTimeout(function() {
				questionBox.style.display = "none", typeTimer = setInterval(function() {
					bmhText.innerHTML = thirdTalk2[2].substring(0, typeIndex + 1), typeIndex++, typeIndex >= thirdTalk2[2].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
						bmhText.innerHTML = "", bmhQuestion.style.display = "none", questionBox.style.display = "block", questionBox.className = "questionBoxShow", getGoods4.style.display = "block", getBtn4.onclick = function() {
							canCllck_gBtn4 && (canCllck_gBtn4 = !1, getBtn4.className = "answerActive", questionBox.className = "questionBoxEnd", talkBox.style.display = "none", bmhTalk.style.display = "none", setTimeout(function() {
								getGoods4.style.display = "none", haveBaoMiHua.style.opacity = 1, haveBaoMiHua.style.animation = "haveGoods1 2.08s forwards", remindRight.style.display = "block", bmhRemind.style.display = "none", fourthPoint = !0, fourthStory(), yzRemind.style.display = "block", baomihua.onclick = function() {
									baomihua_dialog.className = "dialog dialogRight dialogStart", setTimeout(function() {
										baomihua_dialog.className = "dialog dialogRight dialogEnd"
									}, 2e3)
								}
							}, 600))
						}
					}, 1e3))
				}, 80)
			}, 600))
		}
	}, 1800)
}

function fourthStory() {
	fourthPoint && (yongzheng.onclick = function() {
		talkBox.style.display = "block", eunuchTalk.style.display = "block", tjText.innerHTML = fourthTalk[0], setTimeout(function() {
			tjText.innerHTML = "", eunuchTalk.style.display = "none", yzTalk.style.display = "block", typeTimer = setInterval(function() {
				yzText.innerHTML = fourthTalk[1].substring(0, typeIndex + 1), typeIndex++, typeIndex >= fourthTalk[1].length && (clearInterval(typeTimer), typeIndex = 0, setTimeout(function() {
					yzText.innerHTML = "", yzTalk.style.display = "none", talkBox.style.display = "none", eunuch.style.animation = "eunuchLeave 1s linear forwards", yongzhengHand.className = "", yongzhengBody.style.animation = "yongzhengLeave 1s linear forwards", setTimeout(function() {
						page3.style.display = "none", page4.style.display = "block", page4Show()
					}, 1500)
				}, 1e3))
			}, 80)
		}, 1800)
	}), fourthPoint = !1
}
for (var imgArr = ["imgs/loading.gif", "imgs/yu_shining.png", "imgs/yu.png", "imgs/alan.png", "imgs/baomihua_aleft.png", "imgs/baomihua_alogo.png", "imgs/baomihua_aright.png", "imgs/baomihua_qlogo.png", "imgs/baomihua_qtext.png", "imgs/baomihua_talk.png", "imgs/baomihua.png", "imgs/budian.png", "imgs/building.png", "imgs/camera.png", "imgs/cat.png", "imgs/chaoting_bg.jpg", "imgs/character_body.png", "imgs/character_head1.png", "imgs/character_head2.png", "imgs/ciqi_aleft.png", "imgs/ciqi_alogo.png", "imgs/ciqi_aright.png", "imgs/ciqi_hand.png", "imgs/ciqi_qlogo.png", "imgs/ciqi_qtext.png", "imgs/ciqi_talk.png", "imgs/ciqi.png", "imgs/close.png", "imgs/cloud.png", "imgs/crow.png", "imgs/crow2.jpg", "imgs/daizi.png", "imgs/datie_aleft.png", "imgs/datie_alogo.png", "imgs/datie_aright.png", "imgs/datie_body.png", "imgs/datie_hand.png", "imgs/datie_head.png", "imgs/datie_qlogo.png", "imgs/datie_qtext.png", "imgs/datie_talk.png", "imgs/dialog_bubble.png", "imgs/dialog_l.png", "imgs/dialog_r.png", "imgs/dialog2_r.png", "imgs/door_left.png", "imgs/door_right.png", "imgs/erhu_hand.png", "imgs/erhu.png", "imgs/eunuch_walk.png", "imgs/eunuch.png", "imgs/eunuchFace1.png", "imgs/eunuchFace2.png", "imgs/eunuchFace3.png", "imgs/eunuchFace4.png", "imgs/eunuchFace5.png", "imgs/eunuchFace6.png", "imgs/eunuchFace7.png", "imgs/get_btn.png", "imgs/getfoods1.png", "imgs/getfoods2.png", "imgs/getfoods3.png", "imgs/getfoods4.png", "imgs/goods1_text.png", "imgs/goods2_text.png", "imgs/goods3_text.png", "imgs/goods4_text.png", "imgs/guest_lefthand.png", "imgs/guest_righthand.png", "imgs/guest.png", "imgs/hunter_left.png", "imgs/hunter.png", "imgs/join.png", "imgs/juanzhou.png", "imgs/left_btn.png", "imgs/lifa.png", "imgs/lifashi_hand.png", "imgs/lifashi.png", "imgs/light.png", "imgs/logo.png", "imgs/mask.png", "imgs/mountain.jpg", "imgs/music_bg.png", "imgs/music_bg2.png", "imgs/music.png", "imgs/music2.png", "imgs/musical.png", "imgs/page4_head1_2.png", "imgs/page4_head1.png", "imgs/page4_head2.png", "imgs/page4_head3.png", "imgs/page4_head4.png", "imgs/phone_people.png", "imgs/phone_people2.png", "imgs/phone_pose.png", "imgs/poet_body.png", "imgs/poet_head.png", "imgs/question_bg.png", "imgs/remind_down.png", "imgs/remind_left.png", "imgs/remind_right.png", "imgs/ren1.png", "imgs/ren2.png", "imgs/ren3.png", "imgs/right_btn.png", "imgs/share.png", "imgs/shengzhi.jpg", "imgs/smoke.png", "imgs/spark.png", "imgs/star.png", "imgs/start_down.gif", "imgs/start_on.gif", "imgs/start.png", "imgs/sun.png", "imgs/talk_bg.png", "imgs/tanghulu_walk.png", "imgs/tanghulu.png", "imgs/tanghuluTalk.png", "imgs/tiemo_hand.png", "imgs/tiemo.png", "imgs/tou1.png", "imgs/tou2.png", "imgs/tou3.png", "imgs/tou4.png", "imgs/tou5.png", "imgs/yongzheng_hand.png", "imgs/yongzheng_hand2.png", "imgs/yongzheng_talk.png", "imgs/yongzheng.png", "imgs/yu_logo.png", "imgs/door_mohuceng.jpg", "imgs/wy_logo.png", "imgs/chuanzhi.png", "imgs/jian.png", "imgs/hunter_top.png", "imgs/hunter_bottom.png", "imgs/xian.png", "imgs/laxian.png", "imgs/restart.png"], loadingImgs = [], index = 0, i = 0; i < imgArr.length; i++) {
	var loadingObj = new Image;
	loadingObj.src = imgArr[i], loadingObj.onload = function() {
		index++, index >= imgArr.length && loadingOver()
	}
}
musicBg_on.onclick = function() {
	musicBg_on.style.display = "none", musicBg_off.style.display = "block", bgm.src = ""
}, musicBg_off.onclick = function() {
	musicBg_on.style.display = "block", musicBg_off.style.display = "none", bgm.src = "audio/bgm.mp3"
}, setTimeout(function() {
	start.style.display = "block"
}, 400), start.onclick = function() {
	start.style.backgroundImage = 'url("imgs/start_down.gif")', doorLeft.style.animation = "openDoorLeft 0.5s ease-in-out 0.5s forwards", doorRight.style.animation = "openDoorRight 0.5s ease-in-out 0.5s forwards", setTimeout(function() {
		mask.style.display = "none", logo.style.opacity = "0", page2.style.display = "block", (page2.style.display = "block") && page2Show()
	}, 500)
};
var NewsTime = 1e3,
	TextTime = 80,
	newsi = 0,
	txti = 0,
	txttimer, newstimer, characterSayText = ["该不会又乔装打扮偷溜出宫了吧？", "这次是Cosplay了谁啊?", "我得赶紧去找找，大臣们该怒了！"],
	page4_talk = ["可惜朕日理万机，不能一一尝试。", "愿尔等记录之，给后人留个念想嘛！", "一等奖【两万块】！", "真好吃，小盛子，再去给朕爆20斤！"];
dialogAni(alan, alan_dialog), dialogAni(tiemo, tiemo_dialog), dialogAni(budian, budian_dialog), dialogAni(lifa, lifa_dialog), dialogAni(guest, guest_dialog), dialogAni(yongzheng, yongzheng_dialog), chuanzhiBtn(), page6.onclick = function() {
	page6.style.display = "none"
};
var mountainX = -472,
	cloudX = -60,
	buildingX = -48,
	eunuchTop = 65,
	bridgeTop = .2,
	enunchResult = 0,
	firstPoint = !0,
	secondPoint = !1,
	thirdPoint = !1,
	fourthPoint = !1,
	goon = !1,
	getBmh = !1,
	thlFollow = !1,
	datieStory = !1,
	ciqiStroy = !1,
	typeIndex = 0,
	typeTimer = null,
	firstTalk = ["这位师傅，您这玉佩瞧着可真眼熟。", "刚有人想吃糖葫芦木钱，这是垫付的", "啊，酱紫！我们家爷又忘带钱了", "要不我把钱给您，您把它还给我吧！", "哼，这么点钱就想换玉佩？", "打副【银镯】，再烧俩【掸瓶】来换吧！", "谢~~"],
	secondTalk = ["师傅，一副【银镯】，顺丰加急！", "有多急呀，先回答我个问题呗~", "你太笨了，我才不给你打，再猜！", "客官真聪明，银镯奉上！"],
	secondTalk2 = ["掌柜的，来一对掸瓶。", "您知道掸瓶长啥样？", "您连掸瓶是啥都不知道吧，重选！", "哎呦，这位客官真识货呀！"],
	secondTalk3 = ["齐活了，这下可以把【玉佩】给我了吧？", "恩，小伙子有前途，玉佩给你！"],
	canClick_lBtn = !0,
	canClick_rBtn = !0,
	canCllck_gBtn = !0,
	canClick_lBtn2 = !0,
	canClick_rBtn2 = !0,
	canCllck_gBtn2 = !0,
	canCllck_gBtn3 = !0,
	canClick_lBtn4 = !0,
	canClick_rBtn4 = !0,
	canCllck_gBtn4 = !0,
	thirdTalk = ["爷，可找到您了。", "您今天这装扮还真是…性感！", "您快回去吧，大臣还等着觐见哪！", "这位先生，汝何人也？", "您可别装了！要怎样您才肯回去呀！", "伦家想呲【爆米花】~", "我晕！", "上苍在上，朕若负你，天诛地灭", "你若负朕，不知上苍如何发落你也！", "果然不能得罪腹黑男！ #￥%…&@*"],
	thirdTalk2 = ["师傅，来2斤爆米花！", "好，先测测您的“安全指数”哈！", "客官，这是您要的二斤爆米花", "客官你想被炸飞呀，我先躲远点！"],
	fourthTalk = ["爷，这下可以回了吧！", "好样的！待朕回宫慢慢品尝~"];