import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

import { FaFacebook } from "react-icons/fa6";

const About = () => {
  const [rating, setRating] = useState([
    {
      heading: "15K ",
      desc: "Happy Customer",
      id: "1",
    },
    {
      heading: "150K",
      desc: "Monthly Visitors",
      id: "2",
    },
    {
      heading: "15",
      desc: "Countries Worldwide",
      id: "3",
    },
    {
      heading: "100+",
      desc: "Top Partners",
      id: "4",
    },
  ]);
  const [cards, setCards] = useState([
    {
      id: "one",
      name: "Fahad",
      profession: "Developer",
      Image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAQEA8PDxAPDxAPDxAPDw8QFREWFhURFRUYHSggGBolGxYVITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGhAPGC0lHyUrLystLS0tLS0tKystLS0tKy0tLS4tLS0tLS4tLS0tLS0tLS0uLS0tKystKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwAEAQUHBgj/xAA+EAACAQIDBAcFBgQGAwAAAAABAgADEQQSIQUxQVEGEyJhcYGRBzJCocEUUnKx0fAjYuHxFVOSssLiQ4KT/8QAGQEBAQADAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEjEyQQQiE1EjYYH/2gAMAwEAAhEDEQA/ANyiRqpMqsYqysRIsIrDUSWgCqxgEiiGBKMBY1FmFWORYEVY9FgqscogDlhokICMUSDKLDtMARirChAhhYYWEFgLCyFI1RMkSBGWCRHETV7e2tTwlI1al7A5VVfedzuUSi1UcAXJAA1JJsAOZmrqdJsEpynFUb9zgj1Gk5ntfa2Nx7G4K0b9mmuiKL8fvHvPymqr9HsTYsFvx0bhyAmUxnq1l45Wb06/icWlQA03V1PxIwYeomnxB1nJqdbE4dswZ6bDiCV/v5z1/RfpQcU3VVrCsBdSNBUA36cDx/tJqfTGyz29MphgQVEMQhtIRyiBREeBAwscFi1EcICMXovjNQE1m1x50AlGmmsBTpKdZJsnWU6qSKoFJmPKzMI26iMQQVjVhRgTNpBMyogEMQIxRANRGqIKLGgSAljUWABHoIVlVjVWRBGAQMBYaiS0NRAyqwrTKiEZAKiZtMqJmAp1nOunVYPikR9adCkHC8GqVGIuR3BR6zo7icw6eKBiydWzUqIypqxa72Xu0F5jnbJ028Ulymw4Lt9w4DgBLmNpgLYcpq8Bj+q7Nan1fI5w3zlzau16aCwsWYaBjYeM4Lz2X29accseWx5BJBA8556iwo4mk6aZayEm/wAJYAj0JHnN9tZ3YZ8tJr6/waoZx5cZoHpXqI+urA21vv5To4svvbk58d9SOtIIWWV9nYpayLUUEK4JAYWYakEEeUuATredZrqn0ljcsxSEbaACiMAggRsChi98VTWNrakyKsgTUWVaiS84ld1hVIrJHFZIRdUxgMSkcsKNYcAGGDCCURqiLBjUgNWMWLWGkBojkiAY1TCrCRgiUMaDAOEsVeGjQHrMmAphXkBCZtMCFAEic96fbOL1gqFkatTTtLcHslhoeGlp0QzynTqp1a0qoF8rsh8GW/8Axmvl+F03/j3/ACSVzttgLSGo7R7OYszE797HxMbtbCqKlMPuFNB3iDicc7dvMDUbeLXRAR7o5W5wNqVqx7T1Ka5lCWHV3tbU6+HCcO79vW1JOh4zorTf+NYZlFwQAGJ10JHiZ5xlUOEa4sRY3tYggjWbptrG4p0cwJAD6HIRzPC+/wBJS6N0Vq4vLUAcCm9Qg6gNoB+c28e7dVzc1xxnlPp7jZNLLSQWt2c1jvGY5tfWbBRFJHpO+TU08vK7u1ijGxVKNhGFhtugrM1jpApkfMwwJi0MCQJcRLiWWES4hVUiYjSJIEQxoMrIY5TKHgwxEqYwGENWOSIUxymA4Q0MXeEkgaDGqYlTGKYD1MYrRCmNBgHeEpioxBAcph3ihCvCnhpm8UDM5oDLzX7b2eMTSakTlJsVa18jjc375mWy0Fnk0suu3JaWzThsQGanTGIok0qiuoenUpnUEX4WsQdDPQbQ20op2pUcNSfKRmWktx2bG17+kq9M6oqlcVh1NUU61TB18pFnZESopQ7iRncd9jyF/PVtuDLlXC1y24Xpka35nQTk5Mbjlp6XDyY5YS1q9p1ciELrUquzE8WY+87H19ZtvZzsh2avWtfq6KliRwZxp6KT5TOwuiuKx1TMUC7gd/V0U5E8T3DfOm4yvgtiYWx7Ra5CadbialrEnku7uA5nft4Md3pz/k56mq89xjqc5Rsragw+J66nTCUSz56SXsKbm9gTvy6W/DadVwdVXUOpurKGUjiDqJ28nHcK8/DOZLKRoMWDMgzU2GiDiDwkVoFY6wBMPhFXjjIpbRLxrGJeAoyTBMkIroY5TK6GNBlVYEYpiUhgwHpHLEJHKYQ0GEpi5lTCHoY1TK6mMDQqwpjAYhWjFMB6xqiJUxgaQNkg5pnNCjmCZpelW3lwVA1bBnYhKSk+8559w3/3nLto9JcVXGWrXYqdSi2RDfgQtrjuM3cfBln39NWfLMenS9rdLcJQuDU6xx8FGzm/IncPMzwu3untauDSogUKbAqSCWqsvEZvh8vWeTr17Cw46eEp0zrOrHgxxc+XNlk650Jp4c7IqjE1BQptiahWq3w1AiZWUfEbjcN4BEd0N2Nh8apqGtTqpTfKyUGcFuRbMAyg8rX79JruleCShszBKfeWsjhQuY5vs1U1G8czAX8BL/s16P8AVUv8SxFWpTLqaioHyUkoAE3qfeuNeW6cPNwYZ3yy/t38PPnx4+ONez23tTD7NwxqFVREGWlSSymo53Io+ZPK5nz9t/btXFVHr12LM3wjcijciDgB+9ZtOnXSd8fXL3Io07rQTdlS/vEfebefIcJ4+vVtoNTy/WdvFxeE79uLl5fO9I2Iz6AEDjcWv3Tb7E27Xw7dh+xe5RtUPlw8po0B/WwtHKLTbqWarTvV6dd2Ht2lihYdmqBc0yeHNTxE2wUzi2DxNRCGRmUqbggkWPdPVbN6e16RAqha631JslQDuIFj5icvJwau8XRhzb9uhKDFO2plnA4+jiKAr0jdHFxzUjQqRwIOkpO35zmb2VbWOLSqh1jS0isu0RUaZdoio8DBaSILSQMU49YtBGqJkGpGCAojVEA0EYIKiMUQjIkBkjFSBFjVmAsYqwMiGpmLSAfv1gMVo1XiVEyJA41JhqwFyTYC5J5DnEsdZ5np5tLqsMVViGrnJpvyWu/lbTzlxx3dJllqbeH6YbeOMr5xcUqa5aSk8LntEczr8uU0DVCYdGne4JOm4m261/PQxapdiOW/1taenjqTUeflu3dLc/SWMHRB1Ot8wA14WHDebsJkUxY8RpqeGl98ANlJCm4yM1iAbG1gRJlVxj0u39t1MTXGt6VIdThqY3Bb2Ld5awN/AcJ6v2k7d6qjS2bTNilKkcUVPJRlpf8AI/8ArzM5/wBGKypUp16vaFNhUC6dtluyp5stvOI2ti3qs1VmL1arF2JtqW1JI4DXd3WmvHGb3fpvzyutT7a/E1dbDfx7v6wKOGzdy/My1QwWl2vwvuvc93H98oRe3KwNhbcZncmqYk1EVBpy84pKZP17hFYjEAHM50uQo4G29vAQVr1anuL1a/eYXc94HCPLXR4b7XGHAboirlXffyBP5RQwC73d3P8AMxiqip8Jt4Ob/nMbWUjoHswx5yYikGugNKoo4hmzK3+1fSevdtB5zn/syGuIe3CiubdmPbPrunvXPyE4+T5V1YfEdM6w2aIVrSNUPAHz0E1s0doio0JgTxA8NT6/0iXpDjc+J09N0BTVRzHrJM9WvIegkgW1jlEUkesqDWOQQUSWKaQMokNVhqJBKgcsaogWj1EowohgTIWEBAxaEqzNoQEgirIAYQmYCnWcw9ou00qVhRAa9AOGJAylnUaDXhOi7a2guHovWYXyLot7ZmOir5m04hjazVKjVHOapUYu54Zibm3Id06Px8N3yaOfPU0UlYZgP5Tfj8IX6TIqC5Ivck8O+44+Eq4hrFT4j5RtPnOqac13VilaxB3H9JXrVhqTewpMN3LXd5WjxKtVPeHMOPUf1krLFYwlYCmn8tmPKwJP1iMJXzlm1scoS41yhCvlvv5xON0VaQ+LQ/gG/wBdB5mWsLTsJiyq5nGWxv323+Rmuc6WvqASTc6DXXyEbi6+RLybL2PicZTY0kW2bKbuFL/yLfeSfIDjMLlMe6zmNy6kazD0esbrWvbdTXko3E33E75fQjjp8/1jNpYB8NUNGoyF1Ckim+dAGFwLjS8SpI4AeUzxks3Kwytl1ZonEU1Pxf7D+YlOqGA0YEciq/SbOvYi5Ep4fCNiKqUV96pUWmtuGY2J8ANfKYZdMsbt0DoBhOrwgcixru1S3JR2F+S3856TMTvMtrs5aaLTQWSmioo5KosJWZCNJxW7u3VJpFkLTEAyKItFEyM0UWg2elBiLgaSTbbOqotNQ2+xPqSR8jJCqVOneWqdOCgj1mTESrDUTCxiiASyAzIEwogEscsSsaDAaIQgAyZoDJkReaQPCHCZiw8qbV2kmHovWc2WmhbXifhXxJsPOB4L2i7bNSp9npm6UT27H3qtvoNPG88QD+9YVeoapLFwWZiz3Um5JvuuLayvVp1KeoBqLfh7y+A4iehh+uOo5Mp5XdK2gRa/Ig+kr/bQrZbj1nqOgeyMPtHEZcQwGGoqKlRCSrVmzWWiANTezEga2FuM9j0l2fQxFUlP4WCoU1FNKDGjSJW5zXWxIANuXpOTm/Jxxy8XVw/j5ZzbnVBwReBWPaH73S9iMHSzEoDTU8Ax9T3yniMMljd2soLE3GmnhOub125brfSuLMxbkct+QG/53j2xCgb4jB7MOXtMyK1zluC4vzNrX7rSzT2dRXgW/ExPy3Sati+q1Zrfaaow63Ck9txwA3me6xOLGzFVaCgVHoHqSTmyAnV2HDhYbzr3zzP2REBNIdWxtdl0NgbyvVGpa7Nc/ESeNrazny/H88pc71/Tpw/J/jxswnd+2FUkkkksxLMTvYnebxhFoWaIrVJ03KTqOSY23dLxD6T2fsm2L1lapimXsYderpk/5zjUjvCX/wDoJ4ehSeq606al6lRlREXezE2An0P0c2EuBwlPDixdRnrMNz1m1dvC+g7gJz8uXTfx49sOkpV6AmzqLKdWczc1VWlaIZZcrmV2EKqOIlpZcRWS5A5kD1hGcWxDW+6qL5qgB/KZi8Q12Y82J9TJBtuEMcplRHj0eUWVMYDK6vDDQLF5FaJzwesgWFaMzSklSMDyizmg9ZFgw0pk7heAYqQwYdLAOeEuU9mNxkFEmeR9palsE2pAWrSY/wA3atb1I9J0ans0CeZ9p2BH+G18o1U0W8hXS/yJmWHyjHL41wWjUtNph615q8ksUCRxtO3dc2l5y9O70G6tz71iQr9kr2rb9GYeDGbWj0jerRekyGm2VEA0ItfWx5WBG7jNOKo8e+Iq4oJuG/eZpy4cMspnfcbsObPDG4S9Vbcm36Smal0N940blusCe60UdpaRdKtc95Go/wAxePn++M2eTVps+tvALSkrj3b7tabcx90zIxNt8lqyLlzK5FwfX6/mDGJXBmHYaxs0XWYAnwmvr1b+UPE1dfrNZXq3OUet+MxtZSOjexfZwxGNevmAGCp3C/E71QyBvwgB/MidtqzivsDU/acS3LDU1I7zU/6n1nZydJzZ+26TUIqKLTXYmlNnUlWoJFaKuNYh5tMRRvKNehaBSaDR94Hl2vTX6Qqgi6Z3nkjfPs/WBXMxIZJEXkeOWrNfSYmW6ayqsrWhdbBTD5twJ8JbpbKqHugV+sMi3m2p7HI36y/h8Ag4QNJh6DHgZssPs5jv0m3p0VHCWFEbFGjspeOsvUcGq7hGraMBk2IKY5QrSXhXkUIEo7c2auKw9XDscorUmp5gLlSRo1u42PlNhMRtHz9tH2cbTosQKArKNz0XVlYfhJDD0nlsdgq2HbJXpVKLfdqIyE94vvn1SZTx2CpVlKVaaVUO9Kih19DN05r9tf8AHPp8tGvaDWYMnhu751P2h+z7BYfD1cZQZ6BphT1V+spOWcKFW/aU68yO6cj+0Ddy05GbplLGu42BOFY6gNoBvNuPjyuJtq/RHGUuqDdWGxFBMTTQ1O2tMnss4t2SbfIxWGrpcFz/AA0GapwOVRcjxnoOkntETHrTZsEVaiSKb0sT1T5SBemR1ZGTQcb6b+erlmU+Htu4vG/P083jdiYqmLsaTdy1Bf5gTTVcSynKx1HCWdo4ipiXzuoVV0Smt8qjxOrHmTr5WEpDCFmOmkmH8kn7Ln/Fb+kEmPK7jLn+KFha2srDZpB3A+OksU8OR90eszlyYWY/Rb3O/wDvEdVbXvl1lPMeQispOlz6CEdA9iD5cRigPioUm9Kh/WdiWppOR+xmmBVxJvr1VEd9izk/kJ1gTVn7bMb0Y7Su5hOIlrzFQPK9ZY5minaBr61EGVTSsG78o+d/pNjUEq1t3ix+Q/qYGuNOSMMxKi5hNmVD3Dwm6wuylXfqe/WWKQlqmBIqUqSruEsoDAVhGq0KYqRgEBXhZ5AwTIMXnEE1ZBYuIQIlXrJnPKLYaFeUw5hipAszBbviOtmDVgMNQwTUMA1YDVJRz72z7QthqWHB1rVS7DmlMbv9TKfKcWxGGvrxInQvarj+txhQG64eklPwdu23yZR5TxaLedWGP6ubPL9moqYZgCN4IsYeBoEi5GW2gH75/pNpVAi6Wq356+XCXw7PO6JVOEtJRAEGmsssJbElVKicu7jFkHl8xLJWDlmLJUdTbd85WZiOA9Zeryix1/fKQev9leNy4xltbPhn3HeVdD+V52OniBacC6FYjq8fQPBname8PTZQPUiduRt005+23D02haAxlQYiZ6+YMjSYmoBIakTUqQF1BKeJ4eB/MyxUeUsQ/wCQ/KBXMkWXkhHqVxEYMQ0kkqnU6xllaskkgYK0nXGSSFFnMyrzMkgIPMipJJAz1sz1skkDBqQeukklQBrGCaskko4Bt7GGtiK1Q/HWqEfhzHKPS0oq0zJO29ONT2hXyox42NvE6TOCqFkUneQCZJJjv99f6Z6/T/q2hhs0kkVIDNMXkkmLJVxDSg57Q8RJJIrOGxHVVqVQf+OrTf8A0uD9J3xKkkk08jZh6FngmpJJMGYDWMW9eSSBWq4iU8RiN/iZmSBSbESSSQP/2Q==",
    },
    {
      id: "two",
      name: "Fahad",
      profession: "Developer",
      Image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAQEA8PDxAPDxAPDxAPDw8QFREWFhURFRUYHSggGBolGxYVITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGhAPGC0lHyUrLystLS0tLS0tKystLS0tKy0tLS4tLS0tLS4tLS0tLS0tLS0uLS0tKystKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwAEAQUHBgj/xAA+EAACAQIDBAcFBgQGAwAAAAABAgADEQQSIQUxQVEGEyJhcYGRBzJCocEUUnKx0fAjYuHxFVOSssLiQ4KT/8QAGQEBAQADAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEjEyQQQiE1EjYYH/2gAMAwEAAhEDEQA/ANyiRqpMqsYqysRIsIrDUSWgCqxgEiiGBKMBY1FmFWORYEVY9FgqscogDlhokICMUSDKLDtMARirChAhhYYWEFgLCyFI1RMkSBGWCRHETV7e2tTwlI1al7A5VVfedzuUSi1UcAXJAA1JJsAOZmrqdJsEpynFUb9zgj1Gk5ntfa2Nx7G4K0b9mmuiKL8fvHvPymqr9HsTYsFvx0bhyAmUxnq1l45Wb06/icWlQA03V1PxIwYeomnxB1nJqdbE4dswZ6bDiCV/v5z1/RfpQcU3VVrCsBdSNBUA36cDx/tJqfTGyz29MphgQVEMQhtIRyiBREeBAwscFi1EcICMXovjNQE1m1x50AlGmmsBTpKdZJsnWU6qSKoFJmPKzMI26iMQQVjVhRgTNpBMyogEMQIxRANRGqIKLGgSAljUWABHoIVlVjVWRBGAQMBYaiS0NRAyqwrTKiEZAKiZtMqJmAp1nOunVYPikR9adCkHC8GqVGIuR3BR6zo7icw6eKBiydWzUqIypqxa72Xu0F5jnbJ028Ulymw4Lt9w4DgBLmNpgLYcpq8Bj+q7Nan1fI5w3zlzau16aCwsWYaBjYeM4Lz2X29accseWx5BJBA8556iwo4mk6aZayEm/wAJYAj0JHnN9tZ3YZ8tJr6/waoZx5cZoHpXqI+urA21vv5To4svvbk58d9SOtIIWWV9nYpayLUUEK4JAYWYakEEeUuATredZrqn0ljcsxSEbaACiMAggRsChi98VTWNrakyKsgTUWVaiS84ld1hVIrJHFZIRdUxgMSkcsKNYcAGGDCCURqiLBjUgNWMWLWGkBojkiAY1TCrCRgiUMaDAOEsVeGjQHrMmAphXkBCZtMCFAEic96fbOL1gqFkatTTtLcHslhoeGlp0QzynTqp1a0qoF8rsh8GW/8Axmvl+F03/j3/ACSVzttgLSGo7R7OYszE797HxMbtbCqKlMPuFNB3iDicc7dvMDUbeLXRAR7o5W5wNqVqx7T1Ka5lCWHV3tbU6+HCcO79vW1JOh4zorTf+NYZlFwQAGJ10JHiZ5xlUOEa4sRY3tYggjWbptrG4p0cwJAD6HIRzPC+/wBJS6N0Vq4vLUAcCm9Qg6gNoB+c28e7dVzc1xxnlPp7jZNLLSQWt2c1jvGY5tfWbBRFJHpO+TU08vK7u1ijGxVKNhGFhtugrM1jpApkfMwwJi0MCQJcRLiWWES4hVUiYjSJIEQxoMrIY5TKHgwxEqYwGENWOSIUxymA4Q0MXeEkgaDGqYlTGKYD1MYrRCmNBgHeEpioxBAcph3ihCvCnhpm8UDM5oDLzX7b2eMTSakTlJsVa18jjc375mWy0Fnk0suu3JaWzThsQGanTGIok0qiuoenUpnUEX4WsQdDPQbQ20op2pUcNSfKRmWktx2bG17+kq9M6oqlcVh1NUU61TB18pFnZESopQ7iRncd9jyF/PVtuDLlXC1y24Xpka35nQTk5Mbjlp6XDyY5YS1q9p1ciELrUquzE8WY+87H19ZtvZzsh2avWtfq6KliRwZxp6KT5TOwuiuKx1TMUC7gd/V0U5E8T3DfOm4yvgtiYWx7Ra5CadbialrEnku7uA5nft4Md3pz/k56mq89xjqc5Rsragw+J66nTCUSz56SXsKbm9gTvy6W/DadVwdVXUOpurKGUjiDqJ28nHcK8/DOZLKRoMWDMgzU2GiDiDwkVoFY6wBMPhFXjjIpbRLxrGJeAoyTBMkIroY5TK6GNBlVYEYpiUhgwHpHLEJHKYQ0GEpi5lTCHoY1TK6mMDQqwpjAYhWjFMB6xqiJUxgaQNkg5pnNCjmCZpelW3lwVA1bBnYhKSk+8559w3/3nLto9JcVXGWrXYqdSi2RDfgQtrjuM3cfBln39NWfLMenS9rdLcJQuDU6xx8FGzm/IncPMzwu3untauDSogUKbAqSCWqsvEZvh8vWeTr17Cw46eEp0zrOrHgxxc+XNlk650Jp4c7IqjE1BQptiahWq3w1AiZWUfEbjcN4BEd0N2Nh8apqGtTqpTfKyUGcFuRbMAyg8rX79JruleCShszBKfeWsjhQuY5vs1U1G8czAX8BL/s16P8AVUv8SxFWpTLqaioHyUkoAE3qfeuNeW6cPNwYZ3yy/t38PPnx4+ONez23tTD7NwxqFVREGWlSSymo53Io+ZPK5nz9t/btXFVHr12LM3wjcijciDgB+9ZtOnXSd8fXL3Io07rQTdlS/vEfebefIcJ4+vVtoNTy/WdvFxeE79uLl5fO9I2Iz6AEDjcWv3Tb7E27Xw7dh+xe5RtUPlw8po0B/WwtHKLTbqWarTvV6dd2Ht2lihYdmqBc0yeHNTxE2wUzi2DxNRCGRmUqbggkWPdPVbN6e16RAqha631JslQDuIFj5icvJwau8XRhzb9uhKDFO2plnA4+jiKAr0jdHFxzUjQqRwIOkpO35zmb2VbWOLSqh1jS0isu0RUaZdoio8DBaSILSQMU49YtBGqJkGpGCAojVEA0EYIKiMUQjIkBkjFSBFjVmAsYqwMiGpmLSAfv1gMVo1XiVEyJA41JhqwFyTYC5J5DnEsdZ5np5tLqsMVViGrnJpvyWu/lbTzlxx3dJllqbeH6YbeOMr5xcUqa5aSk8LntEczr8uU0DVCYdGne4JOm4m261/PQxapdiOW/1taenjqTUeflu3dLc/SWMHRB1Ot8wA14WHDebsJkUxY8RpqeGl98ANlJCm4yM1iAbG1gRJlVxj0u39t1MTXGt6VIdThqY3Bb2Ld5awN/AcJ6v2k7d6qjS2bTNilKkcUVPJRlpf8AI/8ArzM5/wBGKypUp16vaFNhUC6dtluyp5stvOI2ti3qs1VmL1arF2JtqW1JI4DXd3WmvHGb3fpvzyutT7a/E1dbDfx7v6wKOGzdy/My1QwWl2vwvuvc93H98oRe3KwNhbcZncmqYk1EVBpy84pKZP17hFYjEAHM50uQo4G29vAQVr1anuL1a/eYXc94HCPLXR4b7XGHAboirlXffyBP5RQwC73d3P8AMxiqip8Jt4Ob/nMbWUjoHswx5yYikGugNKoo4hmzK3+1fSevdtB5zn/syGuIe3CiubdmPbPrunvXPyE4+T5V1YfEdM6w2aIVrSNUPAHz0E1s0doio0JgTxA8NT6/0iXpDjc+J09N0BTVRzHrJM9WvIegkgW1jlEUkesqDWOQQUSWKaQMokNVhqJBKgcsaogWj1EowohgTIWEBAxaEqzNoQEgirIAYQmYCnWcw9ou00qVhRAa9AOGJAylnUaDXhOi7a2guHovWYXyLot7ZmOir5m04hjazVKjVHOapUYu54Zibm3Id06Px8N3yaOfPU0UlYZgP5Tfj8IX6TIqC5Ivck8O+44+Eq4hrFT4j5RtPnOqac13VilaxB3H9JXrVhqTewpMN3LXd5WjxKtVPeHMOPUf1krLFYwlYCmn8tmPKwJP1iMJXzlm1scoS41yhCvlvv5xON0VaQ+LQ/gG/wBdB5mWsLTsJiyq5nGWxv323+Rmuc6WvqASTc6DXXyEbi6+RLybL2PicZTY0kW2bKbuFL/yLfeSfIDjMLlMe6zmNy6kazD0esbrWvbdTXko3E33E75fQjjp8/1jNpYB8NUNGoyF1Ckim+dAGFwLjS8SpI4AeUzxks3Kwytl1ZonEU1Pxf7D+YlOqGA0YEciq/SbOvYi5Ep4fCNiKqUV96pUWmtuGY2J8ANfKYZdMsbt0DoBhOrwgcixru1S3JR2F+S3856TMTvMtrs5aaLTQWSmioo5KosJWZCNJxW7u3VJpFkLTEAyKItFEyM0UWg2elBiLgaSTbbOqotNQ2+xPqSR8jJCqVOneWqdOCgj1mTESrDUTCxiiASyAzIEwogEscsSsaDAaIQgAyZoDJkReaQPCHCZiw8qbV2kmHovWc2WmhbXifhXxJsPOB4L2i7bNSp9npm6UT27H3qtvoNPG88QD+9YVeoapLFwWZiz3Um5JvuuLayvVp1KeoBqLfh7y+A4iehh+uOo5Mp5XdK2gRa/Ig+kr/bQrZbj1nqOgeyMPtHEZcQwGGoqKlRCSrVmzWWiANTezEga2FuM9j0l2fQxFUlP4WCoU1FNKDGjSJW5zXWxIANuXpOTm/Jxxy8XVw/j5ZzbnVBwReBWPaH73S9iMHSzEoDTU8Ax9T3yniMMljd2soLE3GmnhOub125brfSuLMxbkct+QG/53j2xCgb4jB7MOXtMyK1zluC4vzNrX7rSzT2dRXgW/ExPy3Sati+q1Zrfaaow63Ck9txwA3me6xOLGzFVaCgVHoHqSTmyAnV2HDhYbzr3zzP2REBNIdWxtdl0NgbyvVGpa7Nc/ESeNrazny/H88pc71/Tpw/J/jxswnd+2FUkkkksxLMTvYnebxhFoWaIrVJ03KTqOSY23dLxD6T2fsm2L1lapimXsYderpk/5zjUjvCX/wDoJ4ehSeq606al6lRlREXezE2An0P0c2EuBwlPDixdRnrMNz1m1dvC+g7gJz8uXTfx49sOkpV6AmzqLKdWczc1VWlaIZZcrmV2EKqOIlpZcRWS5A5kD1hGcWxDW+6qL5qgB/KZi8Q12Y82J9TJBtuEMcplRHj0eUWVMYDK6vDDQLF5FaJzwesgWFaMzSklSMDyizmg9ZFgw0pk7heAYqQwYdLAOeEuU9mNxkFEmeR9palsE2pAWrSY/wA3atb1I9J0ans0CeZ9p2BH+G18o1U0W8hXS/yJmWHyjHL41wWjUtNph615q8ksUCRxtO3dc2l5y9O70G6tz71iQr9kr2rb9GYeDGbWj0jerRekyGm2VEA0ItfWx5WBG7jNOKo8e+Iq4oJuG/eZpy4cMspnfcbsObPDG4S9Vbcm36Smal0N940blusCe60UdpaRdKtc95Go/wAxePn++M2eTVps+tvALSkrj3b7tabcx90zIxNt8lqyLlzK5FwfX6/mDGJXBmHYaxs0XWYAnwmvr1b+UPE1dfrNZXq3OUet+MxtZSOjexfZwxGNevmAGCp3C/E71QyBvwgB/MidtqzivsDU/acS3LDU1I7zU/6n1nZydJzZ+26TUIqKLTXYmlNnUlWoJFaKuNYh5tMRRvKNehaBSaDR94Hl2vTX6Qqgi6Z3nkjfPs/WBXMxIZJEXkeOWrNfSYmW6ayqsrWhdbBTD5twJ8JbpbKqHugV+sMi3m2p7HI36y/h8Ag4QNJh6DHgZssPs5jv0m3p0VHCWFEbFGjspeOsvUcGq7hGraMBk2IKY5QrSXhXkUIEo7c2auKw9XDscorUmp5gLlSRo1u42PlNhMRtHz9tH2cbTosQKArKNz0XVlYfhJDD0nlsdgq2HbJXpVKLfdqIyE94vvn1SZTx2CpVlKVaaVUO9Kih19DN05r9tf8AHPp8tGvaDWYMnhu751P2h+z7BYfD1cZQZ6BphT1V+spOWcKFW/aU68yO6cj+0Ddy05GbplLGu42BOFY6gNoBvNuPjyuJtq/RHGUuqDdWGxFBMTTQ1O2tMnss4t2SbfIxWGrpcFz/AA0GapwOVRcjxnoOkntETHrTZsEVaiSKb0sT1T5SBemR1ZGTQcb6b+erlmU+Htu4vG/P083jdiYqmLsaTdy1Bf5gTTVcSynKx1HCWdo4ipiXzuoVV0Smt8qjxOrHmTr5WEpDCFmOmkmH8kn7Ln/Fb+kEmPK7jLn+KFha2srDZpB3A+OksU8OR90eszlyYWY/Rb3O/wDvEdVbXvl1lPMeQispOlz6CEdA9iD5cRigPioUm9Kh/WdiWppOR+xmmBVxJvr1VEd9izk/kJ1gTVn7bMb0Y7Su5hOIlrzFQPK9ZY5minaBr61EGVTSsG78o+d/pNjUEq1t3ix+Q/qYGuNOSMMxKi5hNmVD3Dwm6wuylXfqe/WWKQlqmBIqUqSruEsoDAVhGq0KYqRgEBXhZ5AwTIMXnEE1ZBYuIQIlXrJnPKLYaFeUw5hipAszBbviOtmDVgMNQwTUMA1YDVJRz72z7QthqWHB1rVS7DmlMbv9TKfKcWxGGvrxInQvarj+txhQG64eklPwdu23yZR5TxaLedWGP6ubPL9moqYZgCN4IsYeBoEi5GW2gH75/pNpVAi6Wq356+XCXw7PO6JVOEtJRAEGmsssJbElVKicu7jFkHl8xLJWDlmLJUdTbd85WZiOA9Zeryix1/fKQev9leNy4xltbPhn3HeVdD+V52OniBacC6FYjq8fQPBname8PTZQPUiduRt005+23D02haAxlQYiZ6+YMjSYmoBIakTUqQF1BKeJ4eB/MyxUeUsQ/wCQ/KBXMkWXkhHqVxEYMQ0kkqnU6xllaskkgYK0nXGSSFFnMyrzMkgIPMipJJAz1sz1skkDBqQeukklQBrGCaskko4Bt7GGtiK1Q/HWqEfhzHKPS0oq0zJO29ONT2hXyox42NvE6TOCqFkUneQCZJJjv99f6Z6/T/q2hhs0kkVIDNMXkkmLJVxDSg57Q8RJJIrOGxHVVqVQf+OrTf8A0uD9J3xKkkk08jZh6FngmpJJMGYDWMW9eSSBWq4iU8RiN/iZmSBSbESSSQP/2Q==",
    },
    {
      id: "three",
      name: "Fahad",
      profession: "Developer",
      Image:
        "data:image/jpeg;base64,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",
    },
  ]);
  return (
    <>
      <section className="bg-white w-full h-auto  lg:px-0    ">
        <div className="">
          {/* Background Image */}
          <div className="relative h-64 flex justify-center items-center text-center bg-black tracking-widest">
            {/* Background Image */}
            <img src="./banner.jpg" alt="Background" className="absolute inset-0 w-full h-full opacity-90" style={{ objectFit: 'cover', backgroundRepeat: 'repeat' }} />
            <h1 className="relative text-white tracking-tighter lg:text-4xl md:text-4xl text-4xl font-bold bg-transparent"> About Us </h1>
          </div>

          {/* Hero section Container */}
          <div >
            <div className="flex justify-between my-20 lg:gap-5 lg:gap-34 gap-0  px-7 lg:flex-row flex-col lg:text-left text-center     items-center mx-auto max-w-7xl">
              <div className="flex flex-col gap-10 lg:max-w-92 ">
                <div>
                  <p className="text-red-600 font-semibold lg:text-base text-xs mb-0">About company</p>
                </div>
                <div>
                  <h1 className="lg:text-5xl text-4xl font-bold">Driven by Passion, Inspired by Purpose</h1>
                </div>
                <div>
                  <p className="text-gray-600 lg:text-base text-sm font-light">
                    We know how large objects will act , But things on a small
                    scale
                  </p>
                </div>
                <div>
                  <Button className="bg-blue-900 text-white py-4 text-sm font-light">
                    Get quote now
                  </Button>
                </div>
              </div>
              <div>
                {/* <img
                  className="rounded-lg"
                  width={500}
                  height={200}
                  alt=""
                  src="./women.jpg"
                /> */}
              </div>
            </div>
          </div>
          <hr />
          {/* Hero section Container */}
          {/* Below Hero Section */}

          <div className="flex flex-col  my-20 gap-15 mx-auto max-w-7xl px-7 lg:text-left text-center ">
            <div className="flex lg:flex-row flex-col   lg:gap-20 gap-5 items-center  ">
              <div className="flex flex-col gap-5 max-w-sm">
                <span>
                  <h3 className="text-red-500">Problems trying</h3>
                </span>
                <span>
                  <p className="font-bold lg:text-2xl md:text-2xl text-xl">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent.
                  </p>
                </span>
              </div>
              <div className=" ">
                <p className="text-gray-600 font-light lg:text-2xl md:text-2xl text-md  lg:pt-13 md:pt-10 pt-0">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics and this
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-20 ">
              {rating.map((ratings) => {
                return (
                  <div key={ratings.id} className="text-center ">
                    <h1 className="text-5xl font-bold lg:text-2xl md:text-4xl ">{ratings.heading}</h1>
                    <p className="text-xl text-gray-600 lg:text-2xl md:text-2xl text-md">{ratings.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <hr />
          {/* Below Hero Section */}

          {/* Team Section */}
          <div className="flex flex-col my-20 text-center  justify-center gap-10 mx-auto max-w-7xl px-7 items-center ">
            <div className="text-center flex flex-col max-w-xl mx-auto gap-8">
              <h1 className="lg:text-4xl font-bold  ">Meet Our Team</h1>
              <p className="text-gray-600">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>

            <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-10 ">
              {cards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    className="h-92 w-80 py-0 rounded-lg flex flex-col gap-5 mx-5 "
                  >
                    <div>
                      <img
                        className="rounded-lg h-50 w-full"
                        src={card.Image}
                        alt=""
                      />
                    </div>
                    <div>
                      <span>
                        <h1>{card.name}</h1>
                      </span>
                      <span>
                        {" "}
                        <p className="text-gray-600 text-sm">
                          {card.profession}
                        </p>
                      </span>
                      <div className="flex justify-center items-center gap-3 mt-5">
                        <FaFacebook className="h-5  " />
                        <FaFacebook className="h-5 " />
                        <FaFacebook className="h-5 " />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          <hr />
          {/* Team Section */}
          {/* Companies Section */}

          <div className="py-40 h-96 justify-center  flex flex-col px-10 bg-emerald-400 text-white min-w-full opacity-80">
            <div className="text-center flex flex-col max-w-xl mx-auto  gap-5">
              <h1 className="lg:text-4xl text-2xl font-bold  ">Big Companies Are Here</h1>
              <p className="text-sm lg:text-base">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
          <hr />
          {/* Companies Section */}

          {/* Footer Banner */}
          <div className=" flex text-white lg:flex-row flex-col ">
            <div className="lg:w-7xl w-full   lg:text-left text-center px-10  py-40  bg-[url('./banner.jpg')] bg-cover bg-center mx-auto flex justify-center ">
              <div className="flex flex-col gap-10 lg:max-w-2xl   mx-auto   ">
                <div>
                  <p className="font-semibold text-xs lg:text-base mb-5">WORK WITH US</p>
                </div>
                <div>
                  <h1 className="lg:text-5xl text-2xl font-bold">NOW LETS GROW YOURS</h1>
                </div>
                <div>
                  <p className=" font-light lg:text-base text-sm lg:max-w-full   ">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                  </p>
                </div>
                <div>
                  <Button className=" border border-transparent bg-black text-white py-4 text-sm font-light">
                    Get quote now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-3xl lg:block hidden bg-gray-500" >
              <img className="w-3xl h-full" src="data:image/jpeg;base64,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" alt="" />
            </div>
          </div>
          {/* Footer Banner */}
        </div>
      </section>
    </>
  );
};

export default About;
