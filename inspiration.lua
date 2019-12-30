when (you) contains dots /dots/:
  when (you) has frame dot colors /frame_dot_colors/:
    for _, dot in ipairs(dots) do
      wish (you) draws shape "text" with options ({
        position=dot,
        text=color,
        font_face="Helvetica"
      }).
    end
  end
end
